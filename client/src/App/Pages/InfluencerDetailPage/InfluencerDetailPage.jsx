import React from 'react'
import influencer from '../../API/influencer'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addItemToCart } from '../../Redux/Cart/cartAction';

import './style.css'

import LocationOnIcon from '@material-ui/icons/LocationOn';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

import SmallCard from '../../Components/Card/SmallCard';

export default function InfluencerDetailPage({match}) {

    const user = influencer.find(i => i.id === match.params.id)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleAddToFavorite = () =>{
        dispatch(addItemToCart(user))
        history.push('/cart')
    }

    return (
        <div className='InfluencerDetailPage'>
            <div className='about_intro'>
                <div className='flexCol'>
                    <img  src={user.image} alt={`get in business with ${user.name} `}/>
                    <h2 className='about_influencer_name'>{user.name}</h2>
                    <h3 className='influencer_price'>{user.price} EGP <span>for 3 stories</span></h3> 
                </div>
                <div className='flex_between socials_media'>
                    <SmallCard people='Follower' type='Instagram' email='@mohamed_emam' value={1010000}/>
                    <SmallCard people='Friend' type='Facebook' email='@mohamed_emam' value={13400000}/>
                    <SmallCard people='Subscriber' type='Youtube' email='@mohamed_emam' value={500000} />
                </div>
                <div className='flexCol'>
                    <h2 className='influnucer_des'>Description</h2>
                    <p className='description'>{user.description}</p>
                </div>
                <div className='flex'>
                </div>
                <div className='flex'>
                    <div className='influncuer_category' >Category:</div>
                        <div className='weird_container'>
                            {
                                user.category.map(category=>(
                                    <div category={category} className='weird'>
                                        {category}
                                    </div>

                                ))
                            }
                        </div>
                </div>
                <div className='flex_center' style={{marginTop: '2rem', paddingBottom:'2rem'}}>
                    <h1>{user.location}</h1>
                    <LocationOnIcon />
                </div>
             </div>

             <div className='buttons_group flex_center'>
                <button onClick={()=> history.push(`/chat-users/${user.id}`)} className='flex send_message'>
                    Send Message
                    <ChatIcon />
                </button>
                <button onClick={() =>handleAddToFavorite()} className='flex favorite_btn'>
                    Add to Favorite
                    <FavoriteBorderIcon />
                </button>
                <button onClick={()=> history.push(`/report-influencer/${user.name}`)} className='flex report_btn'>
                    Report Influencer
                    <ReportProblemIcon />
                </button>
             </div>

        </div>
       
    )
}
