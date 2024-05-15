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
import { Support } from './pages/Support'
import { About } from './pages/About'
import { Favourites } from './pages/Favourites'
import { getFavouritesFromDb } from './api/Favourite'
import { useFavouriteStore } from './stores/FavouriteStore'
import { baseURL } from './api'

console.log('env', import.meta.env)

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState('')

    const authStore = useAuthStore()
    const favouriteStore = useFavouriteStore()

    useEffect(() => {
        // Fetch the user email and token from local storage
        const user = authStore.token

        const token = user?.token

        // If the token/email does not exist, mark the user as logged out
        if (!user || !token) {
            setLoggedIn(false)
        } else {
            // If the token exists, verify it with the auth server to see if it is valid
            fetch(baseURL + '/api/auth/verify', {
                method: 'POST',
                headers: {
                    'jwt-token': token,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setLoggedIn(true)
                })
                .catch(() => {
                    authStore.setToken(undefined)
                })
        }
    }, [])

    useEffect(() => {
        // Fetch the user email and token from local storage
        const user = authStore.token
        const token = user?.token

        if (user && token) {
            try {
                getFavouritesFromDb(token).then((favourites) => {
                    favouriteStore.setFavourites(favourites)
                })
            } catch (error) {
                console.log(error)
            }
        }
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
                    <Route path="/support" element={<Support />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/favourites" element={<Favourites />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
