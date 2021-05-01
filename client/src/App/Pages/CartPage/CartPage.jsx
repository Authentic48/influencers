import React from 'react'
import CartRow from '../../Components/CartRow/CartRow'
import Alert from '../../Common/Alert/Alert'
import { useSelector } from 'react-redux'

import './StyleCartPage.css'

export default function CartPage() {

    const { carts } = useSelector(state => state.cart)

    return (
        <>
  
         <div className='cart_page'>
            <div className='cart_row_group' >
                {
                    carts.length > 0 ?
                    carts?.map(cart => ( <CartRow key={cart._id} user={cart} />)) 
                    :  <Alert severity="info">You haven't added influencer to your favorites</Alert> 
                }
            </div>

        </div>
        </>
    )
}
