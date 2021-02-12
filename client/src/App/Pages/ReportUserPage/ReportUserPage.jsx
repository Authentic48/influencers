import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { createReport } from '../../Redux/Report/reportAction'

import { Formik, Form }  from 'formik'
import * as Yup from 'yup'
import FormInput from '../../Components/FromField/FormInput';

import { useSnackbar } from 'notistack';
import { Button, Card } from '@material-ui/core';
import Navbar from '../../Layouts/Navbar/Navbar';


const validationSchema = Yup.object({
    infName:  Yup.string().required(),
    description: Yup.string().required().min(20),
    topic : Yup.string().required(),
   
  });


export default function ReportUserPage({match, history}) {

    const { isAuthenticated } = useSelector(state => state.auth)
    const { enqueueSnackbar } = useSnackbar();
    const dispatch  = useDispatch()

    useEffect(()=>{
        if (!isAuthenticated) {
            history.push('/login')
        }
    },[history, isAuthenticated])

    const id = match.params.id;
    

    return (
        <>
        <Navbar />
        <div className='create_profile_app'>
            <div className='create_profile'>
                <h1>Here you can report influencer</h1>
                <Card className='flexCol create_profile_card'>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{ infName: '', topic:'', description: '',}}
                        onSubmit={(values) => {
                            enqueueSnackbar('we will check your report and get back to you',{variant : 'success'} );
                            history.goBack()
                            dispatch(createReport({
                                influencer : id,
                                description : values.description,
                                infName : values.infName

                            }))
                        }}
                    >
                    {({ dirty,isSubmitting, isValid })=>(
                        <Form >
                            <FormInput variant="outlined"  name='infName' label='Influencer Name'  />
                            <FormInput variant="outlined"   name='topic' label='Topic'/>
                            <FormInput 
                                name='description' 
                                variant="outlined"  
                                multiline
                                rows={4}
                                label='Description' 
                                placeholder='Tell us, What happened?' />
                            <div className='card_btn' >
                                <Button  
                                    disabled={!isValid || isSubmitting || !dirty} 
                                    type='submit' 
                                    variant="contained" 
                                    color="primary"
                                >
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
