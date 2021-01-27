import React from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'

import './StyleLogin.css'

export default function LoginPage() {
    return (
        <div className='flex'>
            <div className='login_left flexCol'>
                <img className='login_svg ' src='/assets/login.svg' alt='Login to find influencer' />
            </div>
            <div className='login_right'>
                <LoginForm />
            </div>
        </div>
    )
}
