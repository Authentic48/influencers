import React, { useEffect, useState } from 'react'
import Navbar from '../../Layouts/Navbar/Navbar';
import Loading from '../../Common/Loading/Loading';
import Card from '../../Components/Card/Card';


import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addToCart } from '../../Redux/Cart/cartAction';
import { getInfluencerById } from '../../Redux/Influencer/profile/profileAction';

import Lightbox from 'react-image-lightbox';
import CountUp from 'react-countup'
import 'react-image-lightbox/style.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Rating from '@material-ui/lab/Rating';
import { IconButton ,Box, TextField, MenuItem } from '@material-ui/core';

import './style.css'

const currencies = [
    {
      value: '100',
      label: 'Post',
    },
    {
      value: '90',
      label: '3 Stories',
    },
    {
      value: '160',
      label: 'Post - 3 Stories',
    },
    {
      value: '150',
      label: 'Package',
    },
  ];
  




export default function InfluencerDetailPage({match}) {

    const { 
        influencerById: user, 
        singleInfluencerLoading: loading,
        otherInfluencer } = useSelector(state=> state.influencerProfile)
        
    const [open, setOpen ] = useState(false)
    const [ select, setSelect ] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=>{
        dispatch(getInfluencerById(match.params.id))
    },[dispatch, match])

    const handleAddToFavorite = () =>{
        dispatch(addToCart(match.params.id))
        history.push('/cart')
    }

    console.log(select)
    
    if(loading || !user) return <Loading />
    return (
        <>
            <Navbar />
            <div className='details__page'>
                <img onClick={()=> setOpen(true)}  src={user.image} alt={`get in business with ${user.name} `}/>
                <div>
                    <h2 className='inf_name' >{user.name}</h2>
                    <p>Influencer</p>
                    <div className='flex'>
                        <div className='flex'>
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                            <CountUp start={0} end={user.instFollowers} duration={2.75} separator="," />
                            <p className='mr' > Followers |</p>
                        </div>
                        <div className='flex'> 
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <CountUp start={0} end={10000} duration={2.75} separator="," />
                            <p className='mr' >Friends |</p>
                        </div>
                        <div className='flex'>
                            <IconButton>
                                <YouTubeIcon />
                            </IconButton>
                            <CountUp start={0} end={10000} duration={2.75} separator="," />
                            <p className='mr'>subscriber  </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Rating name="simple-controlled" value={3.5} readOnly />
                        </Box> 
                        <p className='inf_num_reviews'>(4 reviews )</p> 
                    </div>
                    <div className='flex' >
                        <h3 className='inf_info_title'>About {user.name}</h3>
                    </div>
                    <p className='des'>{user.bio}</p>
                    <h3 className='inf_info_title'>Interests</h3>
                    <div className='weird_container'>
                    {user.category.map(category=>(
                        <div key={category} category={category} className='weird'>
                            {category}
                        </div>))
                    }
                    </div>
                    <TextField
                        id="outlined-select-currency-native"
                        select
                     
                        label="Select Your Package"
                        value={select}
                        onChange={(e) => setSelect(e.target.value)}
                        variant="outlined"
                        style={{width: 300, margin: 20}}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <div style={{marginTop: 40, marginBottom: 30}} className='flex'> 
                        <button className='btn_secondary'>Request order for {select}$</button>
                        <button className='btn_main flex_center' style={{width: 170, marginLeft: 40}}  onClick={handleAddToFavorite} >
                            Add To  <FavoriteBorderIcon style={{marginLeft: 10}} />
                        </button>
                    </div>
                </div>
            </div>
            {open && (
                <Lightbox
                    mainSrc={user.image}
                    onCloseRequest={() => setOpen(false)}
                />
            )}
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap'}}>
                {otherInfluencer?.map(user => <Card key={user._id} user={user} />)}
            </div>
       </>
    )
}
