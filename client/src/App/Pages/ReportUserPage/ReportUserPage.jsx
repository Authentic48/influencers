import React from 'react'
import { Formik, Form }  from 'formik'

import * as Yup from 'yup'
import FromField from '../../Components/FromField/FromField';

import { Button, Card } from '@material-ui/core';
import Navbar from '../../Layouts/Navbar/Navbar';


const validationSchema = Yup.object({
    influencerName:  Yup.string().required(),
    email: Yup.string().required().email(),
    description: Yup.string().required().min(20),
    topic : Yup.string().required(),
   
  });

export default function ReportUserPage({match}) {

    const keyword = match.params.keyword;
    return (
        <>
        <Navbar />
        <div className='create_profile_app'>
            <div className='create_profile'>
                <h1>Here you can report {keyword}</h1>
                <Card className='flexCol create_profile_card'>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{ email: '', topic:'', description: '', influencerName: keyword ||''}}
                        onSubmit={(values) => console.log(values)}
                    >
                    {({ dirty,isSubmitting, isValid })=>(
                        <Form className='register_form'>
                            <FromField variant="outlined"  name='influencerName' label='Influencer Name'  />
                            <FromField 
                                variant="outlined"  
                                name='email' 
                                label='Your Email' 
                                placeholder='example@example.com' />
                            <FromField variant="outlined"   name='topic' label='Topic'/>
                            <FromField 
                                name='description' 
                                variant="outlined"  
                                multiline
                                rows={4}
                                label='Description' 
                                placeholder='Tell us, What happened?' />
                        
                            <div className='card_btn' >
                                <Button type='submit' variant="contained" color="primary">
                                    Report
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
