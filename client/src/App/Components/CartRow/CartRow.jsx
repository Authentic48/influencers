import React from 'react'
import { useDispatch } from 'react-redux';

import MessageIcon from '@material-ui/icons/Message';
import DeleteIcon from '@material-ui/icons/Delete';

import './StyleCartRow.css'
import { Card } from '@material-ui/core';
import { removeItemCart } from '../../Redux/Cart/cartAction';

export default function CartRow({user}) {
 
    const dispatch = useDispatch()

    return (
        <Card className='cart_card' >
            <div className='flex cart_main'>
                <img className='cart_image' src={user.image} alt={`Your Favorite influenceur is ${user.name}`} />
                <div className='cart_details'>
                    <div className='flex_between cart_detail cart_line'>
                        <p  className='cart_text_small'>Name</p>
                        <p className='text_cart_dynamic'>{user.name}</p>
                    </div>
                    <div className='flex_between cart_detail cart_line'>
                        <p className='cart_text_small'>email</p>
                        {/* <p>{user.email}</p> */}
                        <p>mohamed Youssef</p>
                    </div>
                    <div className='flex_between cart_detail'>
                        <p className='cart_text_small'>Cost</p>
                        <p>{user.price}</p>
                    </div>
                    <button className=' cart_btn flex_center'>
                        Send Message
                        <MessageIcon />
                    </button>
                    <button onClick={() => dispatch(removeItemCart(user._id)) } className='remove flex_center'>
                        Remove 
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </Card>
    )
}
