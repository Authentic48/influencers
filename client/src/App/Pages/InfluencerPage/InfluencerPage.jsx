import React, { useEffect } from 'react'

import Loading from '../../Common/Loading/Loading';
import Navbar from '../../Layouts/Navbar/Navbar';
import Card from '../../Components/Card/Card'

// import influencers from '../../API/influencer'

import { useDispatch, useSelector } from 'react-redux';
import { getInfluencer } from '../../Redux/Influencer/profile/profileAction'

import './InfluencerPage.css'

export default function InfluencerPage() {

    // const  [user ] = useState(influencers);
    const { influencer, loading } = useSelector(state => state.influencerProfile)
    const dispatch = useDispatch()
    console.log(influencer)
    useEffect(()=>{
        dispatch(getInfluencer())
    },[dispatch])

    if(loading || !influencer) return <Loading />
    return (
        <>
        <Navbar />
        <div className='InfluencerPage'>
            {
                influencer?.map(user =>(
                    <Card user={user} key={user._id} />
                ))
            }  
        </div>
        </>
    )
}
