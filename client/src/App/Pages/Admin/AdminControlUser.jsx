import React, { useEffect } from 'react'

import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { AdminUpdateUser, getUserById } from '../../Redux/Admin/Users/usersAction'

import { Formik, Form, Field }  from 'formik'
import * as Yup from 'yup'

import FormInput from '../../Components/FromField/FormInput';
// import Navbar from '../../Layouts/Navbar/Navbar';

import { Button, Card } from '@material-ui/core';
import Loading from '../../Common/Loading/Loading';



const validationSchema = Yup.object({
    name:  Yup.string().required(),
    email: Yup.string().required().email(),
    isAdmin: Yup.boolean().required(),
    isInfluencer : Yup.boolean().required(),
   
});

export default function AdminControlUser({match, history}) {

    const { user, loading } = useSelector(state => state.user)
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserById(match.params.id))
    },[dispatch, match])

    const initialValues={
        name: user?.name || '',
        email: user?.email || '',
        isAdmin: user?.isAdmin || false,
        isInfluencer: user?.isInfluencer || false
    }
  
    if (loading) return <Loading />
    console.log(user)

    return (
        <>
        {/* <Navbar /> */}
        <div className='create_profile_app'>
            <div className='create_profile'>
                <h1>Here you can update Users</h1>
                <Card className=' create_profile_card'>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={initialValues}
                        onSubmit={(values) =>{
                            dispatch(AdminUpdateUser(match.params.id, values))
                            enqueueSnackbar('success, Admin has updated User',{variant : 'success'} );
                            history.goBack()
                        } }
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
                                    <Button 
                                        disabled={!isValid || isSubmitting || !dirty} 
                                        type='submit' 
                                        variant="contained" 
                                        color="primary"
                                    >
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
