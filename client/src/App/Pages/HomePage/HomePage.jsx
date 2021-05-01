import React from 'react'
import Hero from '../../Components/Hero/Hero'
import RegisterModal from '../../Components/RegisterModal/RegisterModal'
// import Navbar from '../../Layouts/Navbar/Navbar'

export default function HomePage() {
    return (
        <>
        <div>
            <Hero />
            <RegisterModal />
            <div style={{
                marginTop: '20rem'
            }}></div>
        </div>
        </>
    )
}
