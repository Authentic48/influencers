import React from 'react'

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userLogout } from '../../../Redux/Auth/AuthActions'

import {  MenuItem } from '@material-ui/core';


export default function AdminMenu({currentUser, setAnchorEl,setOpenMenu,}) {

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
    return (
        <>
            <MenuItem style={{ width: 220  }}  onClick={()=> history.push(`/manage-admin-panel`)}>
                Admin Panel
            </MenuItem>
            <MenuItem    onClick={handleLogout}>
                Logout
            </MenuItem>
        </>
    )
}

