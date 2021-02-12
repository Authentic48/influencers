import React, { useEffect, useState } from 'react'

import SmallCard from '../../Components/Card/SmallCard';
import Navbar from '../../Layouts/Navbar/Navbar';
import Loading from '../../Common/Loading/Loading';
import Card from '../../Components/Card/Card'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addItemToCart } from '../../Redux/Cart/cartAction';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import './style.css'

import LocationOnIcon from '@material-ui/icons/LocationOn';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';


import { getInfluencerById } from '../../Redux/Influencer/profile/profileAction';


export default function InfluencerDetailPage({match}) {


    const { 
        influencerById: user, 
        singleInfluencerLoading: loading, otherInfluencer } = useSelector(state=> state.influencerProfile)
        
    const [open, setOpen ] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=>{
        dispatch(getInfluencerById(match.params.id))
    },[dispatch, match])

    const handleAddToFavorite = () =>{
        dispatch(addItemToCart(user))
        history.push('/cart')
    }
    
    if(loading || !user) return <Loading />
    console.log(user , 'users')
    return (
        <>
         <Navbar />
        <div className='InfluencerDetailPage'>
            <div className='about_intro'>
                <div className='flexCol'>
                    <img onClick={()=> setOpen(true)}  src={user.image} alt={`get in business with ${user.name} `}/>
                    <h2 className='about_influencer_name'>{user.name}</h2>
                    <h3 className='influencer_price'>{user.price} EGP <span>for 3 stories</span></h3> 
                </div>
                <div className='flex_between socials_media'>
                    <SmallCard people='Follower' type='Instagram' email='@mohamed_emam' value={user.instFollowers}/>
                    <SmallCard people='Friend' type='Facebook' email='@mohamed_emam' value={13400000}/>
                    <SmallCard people='Subscriber' type='Youtube' email='@mohamed_emam' value={500000} />
                </div>
                <div className='flexCol'>
                    <h2 className='influnucer_des'>Description</h2>
                    <p className='description'>{user.bio}</p>
                </div>
                <div className='flex'>
                </div>
                <div className='flex category_data_weird'>
                    <div className='influncuer_category' >Category:</div>
                        <div className='weird_container'>
                            {
                                user.category.map(category=>(
                                    <div key={category} category={category} className='weird'>
                                        {category}
                                    </div>

                                ))
                            }
                        </div>
                </div>
                <div className='flex_center' style={{marginTop: '2rem', paddingBottom:'2rem'}}>
                    <h1>{user.city}</h1>
                    <LocationOnIcon />
                </div>
             </div>

             <div className='buttons_group flex_center'>
                <button onClick={()=> history.push(`/chat-users/${user._id}`)} className='flex send_message'>
                    Send Message
                    <ChatIcon />
                </button>
                <button onClick={() =>handleAddToFavorite()} className='flex favorite_btn'>
                    Add to Favorite
                    <FavoriteBorderIcon />
                </button>
                <button onClick={()=> history.push(`/report-influencer/${user._id}`)} className='flex report_btn'>
                    Report Influencer
                    <ReportProblemIcon />
                </button>
             </div>
             {open && (
                <Lightbox
                    mainSrc={user.image}
                    onCloseRequest={() => setOpen(false)}
                />
            )}
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap'}}>
            {otherInfluencer?.map(user => <Card key={user._id} user={user} />)}

        </div>
       </>
    )
}
