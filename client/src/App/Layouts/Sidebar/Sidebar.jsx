import React from 'react'

import './styleSidebar.css'

export default function Sidebar({children}) {
    return (
        <div className='sidebar_main'>
             <div className='sidebar_row_main_dev flexCol'>
                <div  className=''>Profile</div>
            </div>
         <>
            {children}
         </>
        </div>
    )
}
