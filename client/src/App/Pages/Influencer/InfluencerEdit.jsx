import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getInfluencerById } from '../../Redux/Influencer/profile/profileAction'

import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import { Button, Card } from '@material-ui/core'

import {  citiesData, CategoriesOptions } from '../../API/options'

import Navbar from '../../Layouts/Navbar/Navbar';
import FromInput from '../../Components/FromField/FormInput';
import FromSelect from '../../Components/FromField/FromSelect'
import Loading from '../../Common/Loading/Loading'


const validationSchema = Yup.object({
    name: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    city: Yup.string().required(),
    bio: Yup.string().required(),
    price: Yup.number().required(),
    fbAccount: Yup.string().required(),
    fbFriends :Yup.number().required(),
    instAccount : Yup.string().required(),
    instFollowers : Yup.number().required(),
  });

export default function CreateProfilePage({match}) {

   const dispatch = useDispatch()
   const { influencerById : user, singleInfluencerLoading: loading  } = useSelector(state => state.influencerProfile)

   useEffect(()=>{
      dispatch(getInfluencerById(match.params.id))
   },[dispatch, match])

   if (loading || !user) return <Loading />

   const initialValues ={
      name:user.name ||'',
      phoneNumber: user.phoneNumber ||'',
      bio:user.bio ||'',
      category:user.category ||[],
      price: user.price ||'',
      city: user.city ||'',
      image: user.image ||'',
      fbAccount:user.fbAccount ||'',
      fbFriends: user.fbFriends ||'',
      instAccount : user.instAccount ||'',
      instFollowers: user.instFollowers || '',
      isYoutuber: user.isYoutuber ||false,
      youtubeAccount :user.youtubeAccount ||'',
      youtubeSubscribers:user.youtubeSubscribers ||'',
      numReviews: user.numReviews || 0,
   }

    return (
       <Loading>
        <Navbar />
        <div className='create_profile_app'>
         <div className='create_profile'>
               <h1>Edit influenceur profile</h1>
               <Card className='flexCol create_profile_card'>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={initialValues}
                    >
                        {({ dirty,isSubmitting, isValid, values })=>(  
                           <Form  style={{width: '100%'}}> 
                              <h3 className='card_profile_title'>
                                    Insert Some Personal data (All Fields are required)
                              </h3>
                              <FromInput  name='name' label='Name' />
                              <FromInput name='phoneNumber'  label='Phone Number' />
                              <FromInput name='bio' label='Bio'placeholder='Tell us About Your Self' />
                              <FromSelect options={citiesData}   name='city' label='City' />
                              <FromSelect multiple name='category' label='category' options={CategoriesOptions} />
                              <FromInput name='price'  label='Price' />
                              <FromInput  name='fbAccount' label='Facebook Account' />
                              <FromInput  name='fbFriends' label='Number of friends' />
                              <FromInput  name='instAccount' label='Instagram Account' />
                              <FromInput  name='instFollowers' label='Number of followers' />

                              <div className='flex check_box'>
                                 <Field type='checkbox' name='isYoutuber' />
                                 <p style={{marginLeft: 10}}>Are you youtuber?</p>
                              </div>
                              {values.isYoutuber &&
                                 <>
                                    <FromInput name='youtubeAccount' label='Youtube Channel' />
                                    <FromInput
                                        name='youtubeSubscribers' 
                                       label='Subscribers' 
                                       placeholder='how Many subscribers do you have on youtube?' />
                                 </>
                              }
                              <div className='card_btn' >
                                 <Button  type='submit' variant="contained" color="primary">
                                       Create
                                 </Button>
                              </div>
                           </Form>
                        )}
                    </Formik>
                  </Card>
            </div>
         </div>
        </Loading>
    )
}
