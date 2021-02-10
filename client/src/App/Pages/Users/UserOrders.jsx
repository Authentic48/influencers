import React from 'react'

import Navbar from '../../Layouts/Navbar/Navbar'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import SidebarRow from '../../Layouts/Sidebar/SidebarRow/SidebarRow'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

export default function UserOrders({history}) {
    return (
        <>
        <Navbar />
        <Sidebar>
            <SidebarRow title='Profile' Icon={AccountCircleIcon}/>
            <SidebarRow title='Orders'  Icon={FormatListNumberedIcon}/>
            <SidebarRow title='Favorite' Icon={FavoriteBorderIcon} />
        </Sidebar>   
        </>
    )
}
