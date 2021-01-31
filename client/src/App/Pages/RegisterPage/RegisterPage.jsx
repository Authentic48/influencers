import React from 'react'
import RegisterForm from '../../Components/RegisterFrom/RegisterFrom'
import Navbar from '../../Layouts/Navbar/Navbar'

import './StyleRegister.css'

export default function LoginPage() {
    return (
        <>
        <Navbar />
        <div className='flex '>
            <div className='register_left flexCol'>
               <RegisterForm />
            </div>
            <div className='register_right flexCol'>
                <img className='register_svg ' src='/assets/login.svg' alt='Register to find influencer' />
            </div>
        </div>
        </>
    )
}
