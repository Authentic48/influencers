import React from 'react'
import { Formik, Form }  from 'formik'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import FromField from '../FromField/FromField';

import { Checkbox, FormControlLabel } from '@material-ui/core';

import './StyleRegisterForm.css'


const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(5),
  });

export default function RegisterForm() {

    const history = useHistory()

    return (
        <div className='flexCol '>
            <h2 style={{color :'#2168A6'}}>Welcome to Website Name </h2>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ email: '', password:'', name:''}}
                onSubmit={(values) => console.log(values)}
            >
                 {({ dirty,isSubmitting, isValid })=>(
                     <Form className='register_form'>
                          <FromField name='name' label='Name' placeholder='Mohamed Youssef' />
                         <FromField name='email' label='Email' placeholder='example@example.com' />
                         <FromField name='password' label='Password' placeholder='********' />
                         <FormControlLabel
                            control={
                            <Checkbox                               
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="remember me"
                        />
                         <div className='btn_group'>
                             <button className='btn_secondary btn_plus_padding_2'>
                                 Register
                             </button>
                             <p className='auth_text'> 
                                you already have account? 
                                <span onClick={()=>history.push('/login')} >Login</span> 
                             </p>
                         </div>
                     </Form>
                   )}
            </Formik>
        </div>
    )
}
