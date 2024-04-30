import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Discovery } from './pages/Discovery'
import { EventDetail } from './pages/EventDetail'
import { Navbar } from './components/Navbar'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/discovery" element={<Discovery />} />
                    <Route path="/details" element={<EventDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
