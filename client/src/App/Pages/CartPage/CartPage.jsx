import React from 'react'
import CartRow from '../../Components/CartRow/CartRow'
import { useSelector } from 'react-redux'

import './StyleCartPage.css'
import Navbar from '../../Layouts/Navbar/Navbar'

export default function CartPage() {
    const { carts } = useSelector(state => state.cart)
    return (
        <>
        <Navbar />
         <div className='cart_page'>
            <div className='cart_row_group' >
               { carts?.map(cart => ( <CartRow user={cart} />)) }
            </div>

        </div>
        </>
    )
}
