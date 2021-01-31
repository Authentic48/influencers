import React from 'react'
import { Link } from 'react-router-dom'
import './StyleNavbar.css'

export default function Navbar({inverted}) {
    return (
        <div className={inverted ? 'nav_hidden' :'nav flex_between '}>
            <div className='logo'>LOGO</div>
            <div className='links flex'>
                <Link to='/'  className='link home_link'>Home </Link >
                <Link to='/influencer' className='link'>Influencer</Link >
                <Link to='/cart' className='link'>Favorites</Link >
                <Link to='/login' className='link home_link' >Login</Link >
            </div>
        </div>
    )
}
