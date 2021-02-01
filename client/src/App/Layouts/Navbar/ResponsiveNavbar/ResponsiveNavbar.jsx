import React from 'react'
import { Link } from 'react-router-dom'

import './StyleResponsive.css'

export default function ResponsiveNavbar() {
    return (
        <div className='responsive_navbar'>
            <Link to='/'  className='responsive_link '>Home </Link >
            <Link to='/'  className='responsive_link '>Home </Link >
            <Link to='/influencer' className='responsive_link'>Influencer</Link >
            <Link to='/cart' className='responsive_link'>Favorites</Link >
            <Link to='/login' className='responsive_link' >Login</Link >
        </div>
    )
}
