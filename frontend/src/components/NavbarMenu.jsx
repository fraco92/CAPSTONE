import React from 'react'
import { Button, Navbar } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'

export const NavbarMenu = () => {
    const location = useLocation()

    // Verifica se la posizione corrente è "/login"
    const isLoginPage = location.pathname === '/login'

    return (
        <>
            <Navbar fluid>
                <Link
                    to="/"
                    className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white"
                >
                    PlugInLive
                </Link>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link active>Discovery</Navbar.Link>
                    <Navbar.Link className="text-black">About</Navbar.Link>
                    <Navbar.Link>Services</Navbar.Link>
                    <Navbar.Link>Pricing</Navbar.Link>
                    <Navbar.Link>Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
