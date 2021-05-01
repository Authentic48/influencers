import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import RegisterForm from '../../Components/RegisterFrom/RegisterFrom'

import './StyleRegister.css'

export default function RegisterPage({history}) {

    const { isAuthenticated } = useSelector(state => state.auth)

    useEffect(()=>{
        if (isAuthenticated){
            history.push('/influencer')
        }
    },[isAuthenticated, history])

    return (
        <>
        <div className='flex  register_page'>
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
