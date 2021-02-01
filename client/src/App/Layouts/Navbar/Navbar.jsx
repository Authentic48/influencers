import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Hidden, IconButton } from '@material-ui/core'
import ResponsiveNavbar from './ResponsiveNavbar/ResponsiveNavbar'
import CloseIcon from '@material-ui/icons/Close';

import MenuIcon from '@material-ui/icons/Menu';
import './StyleNavbar.css'

export default function Navbar({inverted}) {
    const [open, setOpen] = useState(false)
    return (
        <>
        <div className={inverted ? 'nav_hidden' :'nav flex_between '}>
            <div className='logo'>LOGO</div>
            <div className='links flex'>
              <Hidden smDown>
                    <Link to='/'  className='link home_link'>Home </Link >
                    <Link to='/influencer' className='link'>Influencer</Link >
                    <Link to='/cart' className='link'>Favorites</Link >
                    <Link to='/login' className='link home_link' >Login</Link >
                </Hidden> 
                <Hidden mdUp>
                    {!open ?  (<IconButton onClick={()=>setOpen(true)}> <MenuIcon fontSize='large' /></IconButton>)
                        : (<IconButton onClick={()=>setOpen(false)}> <CloseIcon fontSize='large' /> </IconButton>)}
                </Hidden> 
            </div>
        </div>
       {open && <ResponsiveNavbar />}
        </>
    )
}
