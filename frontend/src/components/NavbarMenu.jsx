import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/AuthStore'
import { Dropdown } from 'flowbite-react'

export const NavbarMenu = (props) => {
    const location = useLocation()
    const authStore = useAuthStore()
    const { loggedIn, email } = props
    const navigate = useNavigate()

    // Verifica se la posizione corrente è "/login"
    const isLoginPage = location.pathname === '/login'

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
                    {authStore.isLoggedIn() && (
                        <Link
                            to="/favourites"
                            className="cursor-pointer text-black hover:text-red-500"
                        >
                            Eventi preferiti
                        </Link>
                    )}
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
                    {!isLoginPage && !authStore.isLoggedIn() && (
                        <Link
                            to="/login"
                            className="cursor-pointer text-black hover:text-red-500"
                        >
                            Log in
                        </Link>
                    )}
                    {authStore.isLoggedIn() && (
                        <input
                            type="button"
                            className="cursor-pointer text-black hover:text-red-500"
                            value="Log out"
                            onClick={() => {
                                authStore.setToken(undefined)
                            }}
                        />
                    )}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
