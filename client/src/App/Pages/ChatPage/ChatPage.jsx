import React from 'react'
import Chat from '../../Components/Chat/ChatMain/Chat'
import ChatSidebar from '../../Components/Chat/ChatSidebar/ChatSidebar'

import './styleChat.css'

export default function ChatPage() {

    return (
        <div className='chat_page'>
            <ChatSidebar />
            <Chat />
        </div>
    )
}
