import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import backgroundImage from '../assets/vishnu-r-nair-m1WZS5ye404-unsplash.jpg'

export const HeroSection = () => {
    return (
        <div className="mb-10 flex items-center justify-center overflow-hidden bg-center">
            <img className="opacity-85" src={backgroundImage} alt="heroimg" />
            <div className="absolute z-10 text-center text-white">
                <h1 className="text-4xl font-bold md:text-6xl">
                    Discover your music!
                </h1>
                <p className="mt-4 text-lg md:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="mt-8 rounded-full bg-red-500 px-6 py-2 font-semibold text-white shadow-lg transition duration-300 hover:bg-red-600">
                    Login
                </button>
            </div>
        </div>
    )
}
