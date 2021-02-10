import React from 'react'

export default function SidebarRow({Icon, title, onClick}) {
    return (
        <div className='sidebar_row flexCol' onClick={onClick}>
           {Icon && <Icon fontSize='large' />}
            <div  className='sidebar_row_text'>{title}</div>
        </div>
    )
}
