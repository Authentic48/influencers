import React from 'react'
import { Formik, Form }  from 'formik'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import FromInput from '../FromField/FormInput';

import { Checkbox, FormControlLabel } from '@material-ui/core';

import './StyleRegisterForm.css'
import { useDispatch, useSelector } from 'react-redux';
import {userRegister} from '../../Redux/Auth/AuthActions';


const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(5),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

export default function RegisterForm() {

    const history = useHistory()
    const dispatch = useDispatch()
    const { registerError : error } = useSelector(state => state.auth)

    return (
        <div className='flexCol '>
            <h2 style={{color :'#2168A6', marginTop: '8rem',}}>Welcome to Website Name </h2>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ email: '', password:'', name:'', confirmPassword: ''}}
                onSubmit={(values) => {
                    dispatch(userRegister(values.name, values.email, values.password))
                }}
            >
                 {({ dirty,isSubmitting, isValid })=>(
                     <Form className='register_form'>
                        <FromInput name='name' label='Name' placeholder='Mohamed Youssef' />
                        <FromInput name='email' label='Email' placeholder='example@example.com' />
                        <FromInput name='password' label='Password' placeholder='********' />
                        <FromInput name='confirmPassword' label='Confirm Password' placeholder='********' />
                        <FormControlLabel
                        control={
                            <Checkbox name="checkedB" color="primary"/>
                        }
                        label="remember me"
                        />
                        {error && <div style={{marginTop: 20}}> 
                             <label className='label'>{error}</label>
                        </div>}
                         <div className='btn_group'>
                             <button type='submit' className='btn_secondary btn_plus_padding_2'>
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
