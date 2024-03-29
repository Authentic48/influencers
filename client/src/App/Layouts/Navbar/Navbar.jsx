import React, { useState } from 'react'

import {  useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'

import MainMenu from '../MainMenu/MainMenu'

import FaceIcon from '@material-ui/icons/Face';
import ResponsiveNavbar from '../ResponsiveNavbar/ResponsiveNavbar'
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import Chip from '@material-ui/core/Chip';
import {  Hidden, IconButton } from '@material-ui/core'

import './StyleNavbar.css'


export default function Navbar({inverted}) {

    const history = useHistory()
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false)
    const { isAuthenticated, currentUser } = useSelector(state => state.auth)

    const handleClick = (e) => {
        if(isAuthenticated){
            setAnchorEl(e.currentTarget);
            setOpenMenu(true);
        }
    };

    return (
        <>
            <div className={inverted ? 'nav_hidden' :'nav flex_between '}>
                <div className='flex'>
                    <div className='logo ' onClick={() => history.push('/')}>LOGO</div>
                    <Hidden smDown>
                        <Link to='/influencer' className='link'>Influencer</Link >
                        <Link to='/cart' className='link'>Favorites</Link >
                    </Hidden> 
                </div>
                <div className='links flex'>
                    <Hidden smDown>
                        {!isAuthenticated? <Link to='/login' className='link home_link' >Login</Link >:
                        <Chip
                        icon={<FaceIcon />}
                        label={currentUser?.name}
                        onClick={handleClick}
                        clickable

                        />}
                    </Hidden>
                    <Hidden mdUp>
                        {!open ?  (<IconButton onClick={()=>setOpen(true)}> <MenuIcon fontSize='large' /></IconButton>)
                            : (<IconButton onClick={(e)=>setOpen(false)}> <CloseIcon fontSize='large' /> </IconButton>)}
                    </Hidden> 
                </div>
            </div>
            {open && <ResponsiveNavbar />}
            {isAuthenticated && 
            <MainMenu
                currentUser={currentUser}
                isAuthenticated={isAuthenticated}
                setAnchorEl={setAnchorEl} 
                setOpenMenu={setOpenMenu}  
                openMenu={openMenu} 
                anchorEl={anchorEl} 
            />}
        </>
    )
}
