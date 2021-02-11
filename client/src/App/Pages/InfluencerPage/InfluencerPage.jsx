import React, { useEffect } from 'react'

import Loading from '../../Common/Loading/Loading';
import Navbar from '../../Layouts/Navbar/Navbar';
import Card from '../../Components/Card/Card'
import Paginate from '../../Components/Paginate/Paginate';
// import { Container } from '@material-ui/core';


import { useDispatch, useSelector } from 'react-redux';
import { getInfluencer } from '../../Redux/Influencer/profile/profileAction'

import './InfluencerPage.css'
import { Container } from '@material-ui/core';

export default function InfluencerPage({match}) {

    const { influencer, loading, pages, page } = useSelector(state => state.influencerProfile)
    const dispatch = useDispatch()
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber
    
    useEffect(()=>{
        dispatch(getInfluencer(keyword, pageNumber))
    },[dispatch, keyword, pageNumber])

    if(loading) return <Loading />
    console.log(influencer, "lorem")
    return (
        <>
        <Navbar />
        <div className='InfluencerPage'>
            {
                influencer?
               ( influencer?.map(user =>(<Card user={user} key={user._id} />)))
                : 
                <Loading />
            }  
        </div>
        <Container>
          <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
        </Container>
        </>
    )
}
