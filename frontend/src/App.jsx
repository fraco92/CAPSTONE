import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Discovery } from './pages/Discovery'
import { EventDetail } from './pages/EventDetail'
import { NavbarMenu } from './components/NavbarMenu'
import { Footer } from './components/Footer'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavbarMenu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/discovery" element={<Discovery />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/details" element={<EventDetail />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
