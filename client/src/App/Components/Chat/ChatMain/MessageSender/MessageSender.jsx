import React from 'react'
import './StyleMessageSender.css'
// import TelegramIcon from '@material-ui/icons/Telegram';
// import TimerIcon from '@material-ui/icons/Timer';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicNoneIcon from '@material-ui/icons/MicNone';



export default function MessageSender() {
    
    return (
        <div className='message_sender'>
          <EmojiEmotionsIcon />
          <div className='send_message_input'>
              <input placeholder='Send Message'/>
          </div>
          <MicNoneIcon />
        </div>
    )
}