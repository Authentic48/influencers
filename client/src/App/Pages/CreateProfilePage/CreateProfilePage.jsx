import React from 'react'

import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Button, Card } from '@material-ui/core'


import './StyleCreateProfile.css'
import Navbar from '../../Layouts/Navbar/Navbar';
import FromInput from '../../Components/FromField/FormInput';
// import FromSelect from '../../Components/FromField/FromSelect';

const validationSchema = Yup.object({
    name: Yup.string().required(),
    phone: Yup.string().required(),
    city: Yup.string().required(),
    description: Yup.string().required(),
    category: Yup.string().required(),
 
  });

export default function CreateProfilePage() {
    return (
       <>
        <Navbar />
        <div className='create_profile_app'>
         <div className='create_profile'>
               <h1>Create influenceur profile</h1>
               <Card className='flexCol create_profile_card'>
                  <Formik
                     onSubmit={(values) => console.log(values)}
                     validationSchema={validationSchema}
                     initialValues={{
                           name:'',
                           phone: '',
                           description:'',
                           category:'',
                           city: '',
                           facebook: false,
                           facebookAccount:'',
                           facebookPrice:'',
                           friends: '',
                           instagram:'',
                           instagramPrice: '',
                           instagramAccount : '',
                           followers: '',
                           youtube: '',
                           youtubeAccount :'',
                           youtubePrice : '',
                           subscribers:'',

                     }}
                     
                  >
                        {({ dirty,isSubmitting, isValid, values })=>(  
                           <Form  style={{width: '100%'}}> 
                              <h3 className='card_profile_title'>
                                    Insert Some Personal data (All Fields are required)
                              </h3>
                              <FromInput variant="outlined"  name='name' label='Name' />
                              <FromInput 
                                 variant="outlined"  
                                 name='phone' 
                                 label='Phone Number' 
                                 placeholder='+2 (---) (---) (---)'/>
                              <FromInput 
                                 variant="outlined"  
                                 name='description' 
                                 label='Bio' 
                                 placeholder='Tell us About Your Self' />
                              <FromInput  variant="outlined" name='city' label='City' />

                              <FromInput   variant="outlined"   name='category' label='Category' />
                              <br />
                              <div className='flex check_box'>
                                 <Field type='checkbox' name='facebook' />
                                 <p style={{marginLeft: 10}}>Facebook Influenceur?</p>
                              </div>
                              
                              {values.facebook &&
                                 <>
                                    <FromInput 
                                       variant="outlined"  
                                       name='facebookAccount' 
                                       label='Facebook Account' />
                                    <FromInput 
                                       variant="outlined"  
                                       name='friends' 
                                       label='Friends' 
                                       placeholder='how Many friends do you have on facebook?' />
                                    
                                    <FromInput 
                                       variant="outlined"  
                                       name='facebookPrice' 
                                       label='Price' 
                                       placeholder='What is your Standard Price on Facebook?' />
                                 </>
                              }
                              <div className='flex check_box'>
                                 <Field type='checkbox' name='instagram' />
                                 <p style={{marginLeft: 10}}>Instagram Influenceur?</p>
                              </div>
                              {values.instagram &&
                                 <>
                                    <FromInput 
                                       variant="outlined"  
                                       name='instagramAccount' 
                                       label='Instagram Account' />
                                    <FromInput 
                                       variant="outlined"  
                                       name='followers' 
                                       label='Followers' 
                                       placeholder='how Many follower do you have on Instagram?' />
                                    <FromInput 
                                       variant="outlined"  
                                       name='instagramPrice' 
                                       label='Price' 
                                       placeholder='What is your Standard Price on Instagram?' />
                                 </>
                              }
                              <div className='flex check_box'>
                                 <Field type='checkbox' name='youtube' />
                                 <p style={{marginLeft: 10}}>Youtuber?</p>
                              </div>
                              {values.youtube &&
                                 <>
                                    <FromInput 
                                       variant="outlined"  
                                       name='youtubeAccount' 
                                       label='Youtube Channel' />
                                    <FromInput 
                                       variant="outlined"  
                                       name='subscribers' 
                                       label='Subscribers' 
                                       placeholder='how Many subscribers do you have on youtube?' />
                                     <FromInput 
                                       variant="outlined"  
                                       name='yotubePrice' 
                                       label='Price' 
                                       placeholder='What is your Standard Price on Youtube?' />
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
        </>
    )
}
