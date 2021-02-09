import React from 'react'
import { Formik, Form }  from 'formik'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import FromInput from '../FromField/FormInput';

import './StyleloginForm.css'
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {userLogin} from '../../Redux/Auth/AuthActions';


const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(5),
  });

export default function LoginForm() {

    const history = useHistory()
    const dispatch = useDispatch()
    const { error } = useSelector(state => state.auth)

    return (
        <div className='login_form'>
            <h2>Welcome to Website Name </h2>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ email: '', password:''}}
                onSubmit={(values) =>{
                    dispatch(userLogin(values.email, values.password))
                }}
            >
                 {({ dirty,isSubmitting, isValid })=>(
                     <Form>
                         <FromInput name='email' label='Email' placeholder='example@example.com' />
                         <FromInput name='password' label='Password' placeholder='********' />
                         <FormControlLabel
                            control={<Checkbox name="checkedB" color="primary"/>}
                            label="remember me"
                        />
                        {error && <div style={{marginTop: 20}}> 
                             <label className='label'>{error}</label>
                        </div>}
                         <div className='btn_group'>
                             <button type='submit' className='btn_secondary btn_plus_padding_2'>
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
