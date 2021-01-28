import React from 'react'

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

import './StyleCard.css'

export default function Card() {
    const image ='https://pbs.twimg.com/profile_images/1301997893923020805/irG2Vq52_400x400.jpg'
    return (
        <div className='card'>
         <div className='card_image_container'>
             <img src={image} alt='Influencer Name' />
         </div>
         <div className='card_detail flexCol'>
            <h3 className='influencer_name'>Mohamed Youssef</h3>
            <h3 className='influencer_price'> 
                500 EGP <span> per 3 stories</span>
            </h3>
         </div>
         <div className='flexCol'>
             <button className='btn_secondary2 flex'>
                 View Profile
             </button>
             <div className='line' />
         </div>
         <div className='flex_between social'>
             <div className='flexCol'>
                <div className='icon_container flexCol instagram'>
                    <InstagramIcon fontSize='large' style={{color:'white'}} />
                </div>
                <h3>12.8K</h3>
                <p className='small_text'>Followers</p>
             </div>

             <div className='flexCol'>
                <div className='icon_container  flexCol facebook'>
                    <FacebookIcon fontSize='large' style={{color:'white'}} />
                </div>
                <h3>12.8K</h3>
                <p className='small_text'>Followers</p>
             </div>

             <div className='flexCol'>
                <div className='icon_container flexCol youtube'>
                    <YouTubeIcon fontSize='large' style={{color:'white'}} />
                </div>
                <h3>12.8K</h3>
                <p className='small_text'>Followers</p>
             </div>

             
         </div>
        </div>
    )
}
