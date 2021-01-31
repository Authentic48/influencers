import React from 'react'
import './StyleMessageSender.css'
import TelegramIcon from '@material-ui/icons/Telegram';
import TimerIcon from '@material-ui/icons/Timer';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicNoneIcon from '@material-ui/icons/MicNone';



export default function MessageSender() {
    
    return (
        <div className='chat_message_sender'>
            <form   >
                <div className='chat_message'>
                    <TelegramIcon />
              
                    <div className='chat_send_input'>
                        <input 
                        placeholder='Write Your Message Here'
                        // value={inputText}
                        // onChange={(e)=>setInputText(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='chat_hidden_btn'></button>
               
               
                <TimerIcon />
                <EmojiEmotionsIcon />
                <MicNoneIcon />
                
            </div>           
            </form>
        </div>
    )
}