import React from 'react'
import { Formik, Form, Field }  from 'formik'

import * as Yup from 'yup'
import FormInput from '../../Components/FromField/FormInput';

import { Button, Card } from '@material-ui/core';
import Navbar from '../../Layouts/Navbar/Navbar';
import { useSelector } from 'react-redux';


const validationSchema = Yup.object({
    name:  Yup.string().required(),
    email: Yup.string().required().email(),
    isAdmin: Yup.boolean().required(),
    isInfluencer : Yup.boolean().required(),
   
});

export default function AdminUpdateUserPage({match}) {

    const { currentUser } = useSelector(state => state.auth)

    const initialValues={
        name: currentUser?.name || '',
        email: currentUser?.email || '',
        isAdmin: currentUser?.isAdmin || false,
        isInfluencer: currentUser?.isInfluencer || false
    }
    console.log(currentUser)

    return (
        <>
        <Navbar />
        <div className='create_profile_app'>
            <div className='create_profile'>
                <h1>Here you can update Users</h1>
                <Card className=' create_profile_card'>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={initialValues}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ dirty,isSubmitting, isValid })=>(
                            <Form >
                                <FormInput variant="outlined"  name='name' label='Name'  />
                                <FormInput variant="outlined"  name='email' label='Email'  />
                                <div className='flex check_box'>
                                    <p style={{marginRight: 10}}>Admin?</p>
                                    <Field type='checkbox' name='isAdmin' />
                                </div>
                                <div className='flex check_box'>
                                    <p style={{marginRight: 10}}>Influencer?</p>
                                    <Field type='checkbox' name='isInfluencer' />
                                </div>
                                <div className='card_btn' >
                                    <Button type='submit' variant="contained" color="primary">
                                        Update
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
