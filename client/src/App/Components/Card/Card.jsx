import React from 'react'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useHistory } from 'react-router-dom'

import './StyleCard.css'

export default function Card({user}) {
 
    const history = useHistory()

    return (
        <div className='card'>
         <div className='card_image_container'>
             <img src={user.image} alt={`get in business with ${user.name} `} />
         </div>
         <div className='card_detail flexCol'>
            <h3 className='influencer_name'>{user.name}</h3>
            <h3 className='influencer_price'> 
                {user.price} EGP <span> per 3 stories</span>
            </h3>
         </div>
         <div className='flexCol'>
             <button onClick={() => history.push(`/user-profile/${user._id}`)} className='btn_secondary2 flex'>
                 View Profile
             </button>
             <div className='line' />
         </div>
         <div className='flex_between social'>
             <div className='flexCol'>
                <div className='icon_container flexCol instagram'>
                    <InstagramIcon fontSize='large' style={{color:'white'}} />
                </div>
                <h3>{user.followers}</h3>
                <p className='small_text'>Followers</p>
             </div>

             <div className='flexCol'>
                <div className='icon_container  flexCol facebook'>
                    <FacebookIcon fontSize='large' style={{color:'white'}} />
                </div>
                <h3>{user.friends}</h3>
                <p className='small_text'>Friends</p>
             </div>

             <div className='flexCol'>
                <div className='icon_container flexCol youtube'>
                    <YouTubeIcon fontSize='large' style={{color:'white'}} />
                </div>
                <h3>{user.subscribers}</h3>
                <p className='small_text'>Subscribers</p>
             </div>

             
         </div>
        </div>
    )
}
