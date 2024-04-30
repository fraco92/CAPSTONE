import React from 'react'
import { Link } from 'react-router-dom'

export const Home = (props) => {
    return (
        <div className="mainContainer">
            <div className={'titleContainer'}>
                <div>Welcome!</div>
            </div>
            <div>This is the home page.</div>

            <Link type="button" className="bg-neutral-50" to="/login">
                Login
            </Link>
        </div>
    )
}
