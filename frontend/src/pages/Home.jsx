import React from 'react'
import { Link } from 'react-router-dom'
import { HeroSection } from '../components/HeroSection'
import { Discovery } from './Discovery'

export const Home = (props) => {
    return (
        <div className="mainContainer">
            <HeroSection />

            <Discovery />
        </div>
    )
}
