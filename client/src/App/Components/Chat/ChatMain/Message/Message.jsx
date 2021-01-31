
import { Avatar } from '@material-ui/core'
import React from 'react'
import './StyleMessage.css'
// import {format} from 'date-fns'
// import { convertTimeStamp } from '../../Utils/Utils'

export default function Message({massages,currentUser }) {
    // console.log(massages)

    const image ='https://pbs.twimg.com/profile_images/1301997893923020805/irG2Vq52_400x400.jpg';
    const image2 ='https://static.nc-myus.com/images/pub/www/uploads/image/94df1bfbdbec4914969058580e6bba27/Egyptian_model_and_actor_Mohamed_Emam_1.JPG'

    return (
        <div className='chat_messages'>
          

            <div className='message_body'>
                <Avatar alt='message Your Favorite influencer' src={image}/>
                <div className='message_container'>
                    <p className='messages'>Hello, Guys</p>
                    <p className='time_stamp'>date</p>
                </div>
            </div>

            <div className='message_body message_body_receiver'>
                <Avatar alt='message Your Favorite influencer' src={image2}/>
                <div className='message_container'>
                    <p className='messages message_receiver'>Hey there</p>
                    <p className='time_stamp'>date</p>
                </div>
            </div>

        </div>
    )
}