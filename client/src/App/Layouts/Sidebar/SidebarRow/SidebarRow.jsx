import React from 'react'

export default function SidebarRow({Icon, title, onClick}) {
    return (
        <div className='sidebar_row_main_dev flexCol' onClick={onClick}>
            {Icon && <div className='icon_container flexCol'>  
                <Icon fontSize='large' style={{color: 'white'}} /> 
            </div>}
            <div  className='sidebar_row_text'>{title}</div>
        </div>
    )
}
