import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/AuthStore'

export const NavbarMenu = (props) => {
    const location = useLocation()
    const authStore = useAuthStore()
    const { loggedIn, email } = props
    const navigate = useNavigate()

    // Verifica se la posizione corrente è "/login"
    const isLoginPage = location.pathname === '/login'

    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem('user')
            props.setLoggedIn(false)
        } else {
            navigate('/login')
        }
    }

    return (
        <>
            <Navbar fluid className="py-6">
                <Link
                    to="/"
                    className="self-center whitespace-nowrap ps-10 text-[35pt] text-xl font-bold text-black  hover:text-red-500 dark:text-white"
                >
                    PlugInLive
                </Link>

                <Navbar.Toggle />
                <Navbar.Collapse className="pe-10">
                    <Link
                        to="/discovery"
                        // onClick={() => navigateTo('/discovery')}
                        className="cursor-pointer text-black hover:text-red-500"
                    >
                        Discovery
                    </Link>
                    <Link
                        to="/about"
                        className="cursor-pointer text-black hover:text-red-500"
                    >
                        Chi siamo
                    </Link>
                    <Link
                        to="/support"
                        className="cursor-pointer text-black hover:text-red-500"
                    >
                        Supporto
                    </Link>
                    {!isLoginPage && authStore.isLoggedIn() && (
                        <input
                            className="cursor-pointer text-black hover:text-red-500"
                            type="button"
                            onClick={onButtonClick}
                            value={loggedIn ? 'Log out' : 'Log in'}
                        />
                    )}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
