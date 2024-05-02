import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import backgroundImage from '../assets/vishnu-r-nair-m1WZS5ye404-unsplash.jpg'

export const HeroSection = () => {
    return (
        <div className="mb-10 flex items-center justify-center overflow-hidden bg-center">
            <img className="opacity-85" src={backgroundImage} alt="heroimg" />
            <div className="absolute z-10 mx-20 text-left text-white">
                <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
                    Discover your music
                </h1>
                <p className="mt-4 hidden text-sm md:text-xl">
                    Esplora un universo di esperienze sonore uniche, lasciati
                    trasportare dalle emozioni e vivi la magia della musica come
                    mai prima d'ora.
                </p>
            </div>
        </div>
    )
}
