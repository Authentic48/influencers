import React, { useEffect, useState } from 'react'

import Loading from '../../Common/Loading/Loading';
import Card from '../../Components/Card/Card'
import Paginate from '../../Components/Paginate/Paginate';
import SearchIcon from '@material-ui/icons/Search';


import { useDispatch, useSelector } from 'react-redux';
import { getInfluencer } from '../../Redux/Influencer/profile/profileAction'

import './InfluencerPage.css'
import { Container, IconButton } from '@material-ui/core';
import SearchInput from '../../Components/SearchInput/SearchInput';

export default function InfluencerPage({match}) {

    const [openSearch, setOpenSearch] = useState(false)
    const { influencer, loading, pages, page } = useSelector(state => state.influencerProfile)
    const dispatch = useDispatch()
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber
    
    useEffect(()=>{
        dispatch(getInfluencer(keyword, pageNumber))
    },[dispatch, keyword, pageNumber])

    if(loading) return <Loading />
    console.log(influencer, "InfluencerPage")
    return (
        <>
        <div className='search_input'>
           {openSearch ? <SearchInput placeholder='Search for influencers' Icon={SearchIcon} />
                :  
                <div className='icon_container'> 
                   <IconButton  onClick={() =>setOpenSearch(true)}>
                       <SearchIcon  style={{color: '#2168A6'}}/> 
                    </IconButton> 
                </div>
            }

        </div>
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
