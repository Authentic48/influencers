import React from 'react'

import './StyleCartRow.css'

export default function Row({leftText, rightText}) {
    return (
        <div className='rows flex'>
            <p className='left_text'>{leftText}</p>
            <p className='right_text'>{rightText}</p>
        </div>
    )
}
