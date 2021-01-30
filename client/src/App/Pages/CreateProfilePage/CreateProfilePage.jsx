import React from 'react'

import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Button, Card } from '@material-ui/core'
import FromField from '../../Components/FromField/FromField';

import './StyleCreateProfile.css'

const validationSchema = Yup.object({
    name: Yup.string().required(),
    price: Yup.number().required(),
    city: Yup.string().required(),
    description: Yup.string().required(),
    category: Yup.string().required(),
    // followers: Yup.number(),
    // friends: Yup.number(),
    // subscribers : Yup.number(),
    // facebookAccount: Yup.string(),
    // youtubeAccount: Yup.string(),
    // instagramAccount: Yup.string(),
  });

export default function CreateProfilePage() {
    return (
        <div className='create_profile'>
            <h1>Create influenceur profile</h1>
            <Card className='flexCol create_profile_card'>
                <div className='flex_cent'>

                </div>
                <Formik
                   onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                    initialValues={{
                        name:'',
                        price: 0,
                        description:'',
                        category:'',
                        city: '',
                        facebook: false,
                        facebookAccount:'',
                        friends: 0,
                        instagram:'',
                        instagramAccount : '',
                        followers: 0,
                        youtube: '',
                        youtubeAccount :'',
                        subscribers:0

                    }}
                   
                >
                     {({ dirty,isSubmitting, isValid, values })=>(  
                         <Form>
                             <h3 className='card_profile_title'>
                                 Insert Some Personal data (All Fields are required)
                            </h3>
                             <FromField variant="outlined"  name='name' label='Name' />
                             <FromField 
                                variant="outlined"  
                                name='price' 
                                label='Price' 
                                placeholder='How much is your Standard ?'/>
                             <FromField 
                                variant="outlined"  
                                name='description' 
                                label='Bio' 
                                placeholder='Tell us About Your Self' />
                             <FromField  variant="outlined" name='city' label='City' />
                             <FromField  variant="outlined" name='category' label='Category' />
                             <br />
                             <div className='flex check_box'>
                                <Field type='checkbox' name='facebook' />
                                <p style={{marginLeft: 10}}>Facebook Influenceur?</p>
                             </div>
                             
                             {values.facebook &&
                                <>
                                   <FromField variant="outlined"  name='facebookAccount' label='Facebook Account' />
                                   <FromField 
                                    variant="outlined"  
                                    name='friends' 
                                    label='Friends' 
                                    placeholder='how Many friends do you have on facebook?' />
                                </>
                             }
                             <div className='flex check_box'>
                                <Field type='checkbox' name='instagram' />
                                <p style={{marginLeft: 10}}>Instagram Influenceur?</p>
                             </div>
                             {values.instagram &&
                                <>
                                   <FromField 
                                      variant="outlined"  
                                      name='instagramAccount' 
                                      label='Instagram Account' />
                                   <FromField 
                                     variant="outlined"  
                                     name='followers' 
                                     label='Followers' 
                                     placeholder='how Many follower do you have on Instagram?' />
                                </>
                             }
                             <div className='flex check_box'>
                                <Field type='checkbox' name='youtube' />
                                <p style={{marginLeft: 10}}>Youtuber?</p>
                             </div>
                             {values.youtube &&
                                <>
                                   <FromField 
                                     variant="outlined"  
                                     name='youtubeAccount' 
                                     label='Youtube Channel' />
                                   <FromField 
                                    variant="outlined"  
                                    name='subscribers' 
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
    )
}
