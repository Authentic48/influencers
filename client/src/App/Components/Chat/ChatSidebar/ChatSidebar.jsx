import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import BorderColorIcon from '@material-ui/icons/BorderColor';

import './StyleSidebar.css'
import { IconButton } from '@material-ui/core';
import SidebarRow from './SidebarRow/SidebarRow';



export default function ChatSidebar() {

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <div className='search'>
                    <SearchIcon />
                    <input type='text' placeholder='Search for channels or users' />
                </div>
                <IconButton>
                    <BorderColorIcon  />
                </IconButton>
            </div>
            <SidebarRow />
            <SidebarRow />
            <SidebarRow />
            <SidebarRow />
            <SidebarRow />
        </div>
    )
}