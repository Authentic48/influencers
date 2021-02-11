import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {editProfile} from '../../Redux/Influencer/profile/editProfileAction'
import { getInfluencerById } from '../../Redux/Influencer/profile/profileAction'

import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import { Button, Card } from '@material-ui/core'
import { useSnackbar } from 'notistack';

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

export default function EditInfluencer({match, history}) {

   const dispatch = useDispatch()
   const { enqueueSnackbar } = useSnackbar();
   const { influencerById, singleInfluencerLoading  } = useSelector(state => state.influencerProfile)

   useEffect(()=>{
      dispatch(getInfluencerById(match.params.id))
   },[dispatch, match])
   
   if (singleInfluencerLoading   ) return <Loading />
   // console.log(influencerById)
    return (
       <>
        <Navbar />
        <div className='create_profile_app'>
         <div className='create_profile'>
               <h1>Edit influenceur profile</h1>
               <Card className='flexCol create_profile_card'>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{
                           name:influencerById?.name ||'',
                           phoneNumber: influencerById?.phoneNumber ||'',
                           bio:influencerById?.bio ||'',
                           category:influencerById?.category ||[],
                           price: influencerById?.price ||'',
                           city: influencerById?.city ||'',
                           image: influencerById?.image ||'',
                           fbAccount:influencerById?.fbAccount ||'',
                           fbFriends: influencerById?.fbFriends ||'',
                           instAccount : influencerById?.instAccount ||'',
                           instFollowers: influencerById?.instFollowers || '',
                           isYoutuber: influencerById?.isYoutuber ||false,
                           youtubeAccount :influencerById?.youtubeAccount ||'',
                           youtubeSubscribers:influencerById?.youtubeSubscribers ||'',
                           numReviews: influencerById?.numReviews || 0,
                        }}
                        onSubmit={(values) =>{
                           dispatch(editProfile(values, match.params.id))
                           enqueueSnackbar('Success, Profile Updated',{variant : 'success'} );
                           history.goBack()
                        }}
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
                                 <Button  
                                    disabled={!isValid || isSubmitting || !dirty}  
                                    type='submit' 
                                    variant="contained" 
                                    color="primary"
                                 >
                                       Save
                                 </Button>
                              </div>
                           </Form>
                        )}
                    </Formik>
                  </Card>
            </div>
         </div>
        </>
    )
}
