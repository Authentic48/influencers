import React from 'react'

import InfluencerMenu from './Menus/InfluencerMenu';
import AdminMenu from './Menus/AdminMenu';
import UserMenu from './Menus/UserMenu';

import { Menu } from '@material-ui/core';



export default function MainMenu({anchorEl,currentUser, setAnchorEl,setOpenMenu, openMenu}) {



    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
      };
  
    return (
        <div>
            <Menu
                id="simple-menu"
                className='nav_menu_'
                anchorEl={anchorEl}
                onClick={handleClose}
                keepMounted
                open={openMenu}
                onClose={handleClose}
                onMouseLeave={handleClose}
                MenuListProps={{
                    onMouseLeave: handleClose,
                }}
                style={{
                    width: 200,
                    marginTop: 40,
                    marginLeft: 20,
                }}
            >
                {currentUser.isAdmin ? 
                    <AdminMenu  currentUser={currentUser}  setAnchorEl={setAnchorEl} setOpenMenu={setOpenMenu}/>
                :
                currentUser.isInfluencer ?
                    <InfluencerMenu  currentUser={currentUser}  setAnchorEl={setAnchorEl} setOpenMenu={setOpenMenu}/>
                :
                    <UserMenu  currentUser={currentUser}  setAnchorEl={setAnchorEl} setOpenMenu={setOpenMenu}/>
                }
                
            </Menu>
        </div>
    )
}

