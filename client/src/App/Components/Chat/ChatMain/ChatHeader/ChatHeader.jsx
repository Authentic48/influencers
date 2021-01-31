import React, { useEffect, useState } from 'react'

import { Avatar, IconButton } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './StyleChatHeader.css'

export default function ChatHeader() {
    
    const [seed,setSeed] = useState()
 
    useEffect(()=>{
        setSeed(Math.floor(Math.random()* 5000))
    },[])
    
    const img = `https://avatars.dicebear.com/api/human/${seed}.svg`
    return ( 
        <div className='chat_header'>
            <div className='chat_header_main'>
                <div className='chat_header_left'>
                    <Avatar src={img} />
                    <div className='chat_header_info'>
                        <strong>Channel Name</strong>
                        <p> Last seen at 12:00 am</p>
                    </div>
                </div>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton> 
            </div>
            
        </div>
    )
}