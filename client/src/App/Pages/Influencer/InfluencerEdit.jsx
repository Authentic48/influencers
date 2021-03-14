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
                            <Form  style={{width: '80%'}}> 
                            <h3 className='card_profile_title'>
                                  Insert Some Personal data (All Fields are required)
                            </h3>
                            <div className='flex_evenly'>
                               <FromInput  variant="outlined"  name='name' label='Name' />
                               <FromInput  variant="outlined" name='phoneNumber'  label='Phone Number' />
                            </div>
                            <div className='flex_evenly'>
                               <FromSelect variant="outlined"  options={citiesData}   name='city' label='City' />
                               <FromSelect variant="outlined"  multiple name='category' label='category' options={CategoriesOptions} />
                            </div>
                               <FromInput multiline  rows={3} variant="outlined" name='bio' label='Bio'placeholder='Tell us About Your Self' />
                            <div className='flex_col' style={{marginTop: 40}}>
                            <h3 className='card_profile_title'> Tell us about your fee  </h3>
                            <div className='flex_evenly'>
                               <FromInput  variant="outlined" name='price'  label='Price for 3 stories' />
                               <FromInput  variant="outlined" name='price2'  label='Price for Post' />
                            </div>
                            {/* <div className='flex_evenly'>
                               <FromInput  variant="outlined" name='price'  label='Price for 3 stories' />
                               <FromInput  variant="outlined" name='price'  label='Price for Post' />
                            </div> */}
                            </div>
                            <h3 className='card_profile_title' style={{marginTop: 40}}> Social Media Information  </h3>
                            <div className='flex_evenly'>
                               <FromInput  variant="outlined"  name='fbAccount' label='Facebook Account' />
                               <FromInput  variant="outlined"    name='fbFriends' label='Number of friends' />
                            </div>
                            <div className='flex_evenly'>
                               <FromInput  variant="outlined"  name='instAccount' label='Instagram Account' />
                               <FromInput  variant="outlined"  name='instFollowers' label='Number of followers' />
                            </div>
                            <div className='flex check_box'>
                               <Field type='checkbox' name='isYoutuber' />
                               <p style={{marginLeft: 10}}>Are you youtuber?</p>
                            </div>
                            {values.isYoutuber &&
                               <>
                                  <div className='flex_evenly'>
                                     <FromInput variant="outlined" name='youtubeAccount' label='Youtube Channel' />
                                     <FromInput variant="outlined" name='youtubeSubscribers'   label='Subscribers' />
                                  </div>
                               </>
                            }
                            <div className='card_btn' >
                               <Button  
                                  type='submit' 
                                  variant="contained" 
                                  disabled={!isValid || isSubmitting || !dirty} 
                                  color="primary"
                                  >
                                     Edit
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
