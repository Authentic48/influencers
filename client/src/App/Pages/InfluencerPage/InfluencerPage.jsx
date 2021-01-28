import React, { useState } from 'react'
import Card from '../../Components/Card/Card'
import influencer from '../../API/influencer'

import './InfluencerPage.css'

export default function InfluencerPage() {

    const  [user ] = useState(influencer);

    return (
        <div className='InfluencerPage'>
            {
                user.map(user =>(
                    <Card user={user} key={user.id} />
                ))
            }  
        </div>
    )
}
