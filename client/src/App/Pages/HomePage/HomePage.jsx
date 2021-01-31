import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Layouts/Navbar/Navbar'

export default function HomePage() {
    return (
        <>
        <Navbar />
        <div>
            <Hero />
            <div style={{
                marginTop: '20rem'
            }}></div>
        </div>
        </>
    )
}
