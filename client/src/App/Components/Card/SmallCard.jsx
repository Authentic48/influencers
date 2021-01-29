import React from 'react'
import CountUp from 'react-countup'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import './StyleSmallCard.css'

export default function SmallCard({value, email, type, people}) {
    return (
        <div className='flexCol social_media'>
            <h1 className='social_media_name '>{type}</h1>
            <h3 className='flex' > 
                {email}
                <CheckCircleIcon  style={{marginLeft: 5, color: '#1a57d1'}}/></h3>
            <h1 className='social_media_count'>
                <CountUp start={0} end={value} duration={2.75} separator="," />
            </h1>
            <p className='small_text_influence small_text'>{people}</p>
        </div>
    )
}
