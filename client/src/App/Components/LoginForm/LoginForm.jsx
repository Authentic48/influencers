import React from 'react'
import { Formik, Form }  from 'formik'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import FromField from '../FromField/FromField';

import './StyleloginForm.css'
import { Checkbox, FormControlLabel } from '@material-ui/core';


const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(5),
  });

export default function LoginForm() {

    const history = useHistory()

    return (
        <div className='login_form'>
            <h2>Welcome to Website Name </h2>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ email: '', password:''}}
                onSubmit={(values) => console.log(values)}
            >
                 {({ dirty,isSubmitting, isValid })=>(
                     <Form>
                         <FromField name='email' label='Email' placeholder='example@example.com' />
                         <FromField name='password' label='Password' placeholder='********' />
                         <FormControlLabel
                            control={
                            <Checkbox name="checkedB" color="primary"/>
                            }
                            label="remember me"
                        />
                         <div className='btn_group'>
                             <button className='btn_secondary btn_plus_padding_2'>
                                 Login
                             </button>
                             <p className='auth_text'> 
                                You don't have account? 
                                <span onClick={()=>history.push('/register')} >Register</span> 
                             </p>
                         </div>
                     </Form>
                   )}
            </Formik>
        </div>
    )
}
