import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const NavbarMenu = () => {
    const location = useLocation()
    const navigateTo = useNavigate()

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
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
