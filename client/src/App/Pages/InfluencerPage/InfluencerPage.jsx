import React, { useEffect } from 'react'

import Loading from '../../Common/Loading/Loading';
import Navbar from '../../Layouts/Navbar/Navbar';
import Card from '../../Components/Card/Card'


import { useDispatch, useSelector } from 'react-redux';
import { getInfluencer } from '../../Redux/Influencer/profile/profileAction'

import './InfluencerPage.css'

export default function InfluencerPage() {

    const { influencer, loading } = useSelector(state => state.influencerProfile)
    const dispatch = useDispatch()

  
    useEffect(()=>{
        dispatch(getInfluencer())
    },[dispatch])

    if(loading) return <Loading />
    return (
        <>
        <Navbar />
        <div className='InfluencerPage'>
            {
                influencer?
               ( influencer?.influencers.map(user =>(<Card user={user} key={user._id} />)))
                : 
                <Loading />
            }  
        </div>
        </>
    )
}
