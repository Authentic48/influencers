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
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

export default function RegisterForm() {

    const history = useHistory()

    return (
        <div className='flexCol '>
            <h2 style={{color :'#2168A6', marginTop: '8rem',}}>Welcome to Website Name </h2>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ email: '', password:'', name:'', confirmPassword: ''}}
                onSubmit={(values) => console.log(values)}
            >
                 {({ dirty,isSubmitting, isValid })=>(
                     <Form className='register_form'>
                        <FromField name='name' label='Name' placeholder='Mohamed Youssef' />
                        <FromField name='email' label='Email' placeholder='example@example.com' />
                        <FromField name='password' label='Password' placeholder='********' />
                        <FromField name='confirmPassword' label='Confirm Password' placeholder='********' />
                        <FormControlLabel
                        control={
                            <Checkbox name="checkedB" color="primary"/>
                        }
                        label="remember me"
                        />
                         <div className='btn_group'>
                             <button className='btn_secondary btn_plus_padding_2'>
                                 Register
                             </button>
                             <p className='auth_text'> 
                                You already have account! 
                                <span onClick={()=>history.push('/login')} >Login</span> 
                             </p>
                         </div>
                     </Form>
                   )}
            </Formik>
        </div>
    )
}
