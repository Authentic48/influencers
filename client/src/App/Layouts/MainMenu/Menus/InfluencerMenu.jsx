import React from 'react'

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userLogout } from '../../../Redux/Auth/AuthActions'

import {  MenuItem } from '@material-ui/core';


export default function InfluencerMenu({currentUser, setAnchorEl,setOpenMenu,}) {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
      };
    const handleLogout =() =>{
        history.push('/')
        dispatch(userLogout())
        handleClose()
    }
    console.log(currentUser)
    return (
        <>
            <MenuItem style={{ width: 220  }}  onClick={()=> history.push(`/influencer-profile/${currentUser._id}`)}>
                Profile
            </MenuItem>
            <MenuItem   onClick={()=> history.push(`/influencer-order/${currentUser._id}`)}>
                Orders
            </MenuItem>
            <MenuItem    onClick={handleLogout}>
                Logout
            </MenuItem>
        
        </>
    )
}


// 1- create Profile
// 2- create direction to faculty