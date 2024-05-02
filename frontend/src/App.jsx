import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Discovery } from './pages/Discovery'
import { EventDetail } from './pages/EventDetail'
import { NavbarMenu } from './components/NavbarMenu'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react'
import { SignUp } from './pages/SignUp'
import { useAuthStore } from './stores/AuthStore'

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState('')

    const authStore = useAuthStore()

    useEffect(() => {
        // Fetch the user email and token from local storage
        const user = authStore.token

        // If the token/email does not exist, mark the user as logged out
        if (!user || !user.token) {
            setLoggedIn(false)
            return
        }

        // If the token exists, verify it with the auth server to see if it is valid
        fetch('http://localhost:3030/api/auth/verify', {
            method: 'POST',
            headers: {
                'jwt-token': user.token,
            },
        }).catch((error) => {
            authStore.setToken(undefined)
        })
    }, [])
    return (
        <div className="App">
            <BrowserRouter>
                <NavbarMenu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/discovery" element={<Discovery />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/details/:id" element={<EventDetail />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
