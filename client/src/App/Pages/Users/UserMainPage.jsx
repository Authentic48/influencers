import React from 'react'

import { Formik, Form }  from 'formik'
import * as Yup from 'yup'

import FormInput from '../../Components/FromField/FormInput';
import Navbar from '../../Layouts/Navbar/Navbar'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import SidebarRow from '../../Layouts/Sidebar/SidebarRow/SidebarRow'

import { Button, Card } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

import './StyleUsers.css'
import { useSelector } from 'react-redux';


const validationSchema = Yup.object({
    name:  Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default function UserMainPage({history}) {

    const { currentUser } = useSelector(state => state.auth)

    return (
        <>
        <Navbar />
        <div className='flex'>
            <Sidebar>
                <SidebarRow title='Profile' Icon={AccountCircleIcon}/>
                <SidebarRow title='Orders'  Icon={FormatListNumberedIcon}/>
                <SidebarRow title='Favorite' Icon={FavoriteBorderIcon} onClick={()=>history.push('/cart')} />
            </Sidebar>   
            <div className='flexCol user_main' >
                <Card className=' user_card'>
                    <h3>Update your information</h3>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{ name: currentUser?.name ||'', password: '', confirmPassword: ''}}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ dirty,isSubmitting, isValid })=>(
                            <Form >
                                <FormInput variant="outlined"  name='name' label='Name'  fillWidth/>
                                <FormInput variant="outlined"  name='password' label='Password' type='password'  />
                                <FormInput variant="outlined"  name='confirmPassword' label='Confirm Password' type='password'  />
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
