import React from 'react'

import ChatHeader from './ChatHeader/ChatHeader'
import MessageSender from './MessageSender/MessageSender'
import Message from './Message/Message'
import './StyleChat.css'

export default function Chat() {
    
    return (
        <div className='chat_app'>
            <ChatHeader  />
            <Message />
            <div className='message_sender_main' >
                <MessageSender/> 
            </div>
        </div>
    )
}
