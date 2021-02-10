import React from 'react'

import './styleSidebar.css'

export default function Sidebar({children}) {
    return (
        <div className='sidebar'>
             <div className='sidebar_row flexCol'>
                <div  className=''>Profile</div>
            </div>
         <>
            {children}
         </>
        </div>
    )
}
