import React from 'react'
import profile from "../assets/profile.png";

const HeroSection = () => {
    return (
        <div className='h-screen bg-white px-6 py-4 '>
            <div className='h-full w-full bg-cover bg-center bg-no-repeat rounded-3xl'
                style={
                    {
                        backgroundImage: `url(${profile})`
                    }}
            >
            </div>
        </div>
    )
}

export default HeroSection