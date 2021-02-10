import React, { useEffect } from 'react'


import Navbar from '../../Layouts/Navbar/Navbar'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import SidebarRow from '../../Layouts/Sidebar/SidebarRow/SidebarRow'
import Loading from '../../Common/Loading/Loading'

import { Box } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ChatIcon from '@material-ui/icons/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { getInfluencer } from '../../Redux/Influencer/profile/profileAction'

import './Styleinfluencer.css'
import Row from '../../Components/CartRow/Row'


export default function InfluencerMain({history}) {
    const {currentUser} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getInfluencer())
    },[dispatch])

    const {loading, influencer } = useSelector(state => state.influencerProfile)
    
    if(!influencer || loading) return <Loading />
    const profile = influencer.influencers?.find(i => i.user === currentUser._id )
  
    return (
        <>
        <Navbar />
        
        <div className='InfluencerMain' >
            <Sidebar>
                <SidebarRow 
                    title='Profile' 
                    Icon={AccountCircleIcon} 
                    onClick={()=>history.push(`/influencer-profile-detail/${profile._id}`)} 
                />
                <SidebarRow 
                    title='Edit Profile' 
                    Icon={BorderColorIcon} 
                    onClick={()=>history.push(`/editprofile/${profile._id}`)} 
                />
                <SidebarRow title='Orders' Icon={FormatListNumberedIcon} />
                <SidebarRow title='Chat ' Icon={ChatIcon}/>
            </Sidebar>
           <div style={{marginLeft: '20%'}}>
               {/* <h1> {profile.name}, Influencer Panel</h1> */}
               <div className='influencer_panel  '>
                   <div className='influencer_panel_left'>
                       <img src={profile.image} alt ={`Get in touch with the best influencer ${profile.name}`} />
                       <h3 className='influencer_main_text'>About {profile.name}</h3>
                       <p className='influencer_small_text'>{profile.bio}</p>
                   </div>
                   <div className='influencer_panel_right'>
                        <h3 className='influencer_main_text_blue'>Influencer & Youtuber</h3> 
                        <div className='flex'>
                            <p className='reviews_num'>({profile.numReviews})</p>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating name="pristine" value={4.5} />
                            </Box>
                        </div>
                        <h3 className='influencer_main_text'>Category</h3>
                       <div className='category_container' >
                            {profile.category.map(category => 
                            <p className='influencer_smaller_text' key={category}>{category}</p>)}
                       </div>
                    <div style={{marginTop: '3rem'}}>
                        <h3 className='personal_data'>personal data</h3>
                        <Row leftText={'Phone'} rightText={profile.phoneNumber} />
                        <Row leftText={'Price'} rightText={profile.price} />
                        <Row leftText={'city'} rightText={profile.city} />
                        <Row leftText={'Instagram username'} rightText={profile.fbAccount} />
                        <Row leftText={'Followers'} rightText={profile.fbFriends} />
                        <Row leftText={'Facebook username'} rightText={profile.instAccount} />
                        <Row leftText={'Friends'} rightText={profile.instFollowers} />
                    </div>
                   </div>
               </div>
           </div>
        </div>
        </>
    )
}
