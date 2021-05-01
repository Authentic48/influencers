import React,{ useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoginForm from '../../Components/LoginForm/LoginForm'

import './StyleLogin.css'

export default function LoginPage({history}) {
    const { isAuthenticated } = useSelector(state => state.auth)

    useEffect(()=>{
        if (isAuthenticated){
            history.push('/influencer')
        }
    },[isAuthenticated, history])
    return (
        <>
        <div className='flex'>
            <div className='login_left flexCol'>
                <img className='login_svg ' src='/assets/login.svg' alt='Login to find influencer' />
            </div>
            <div className='login_right'>
                <LoginForm />
            </div>
        </div>
        </>
    )
}
