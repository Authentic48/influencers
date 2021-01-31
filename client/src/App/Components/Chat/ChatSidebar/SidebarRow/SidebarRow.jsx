
import { Avatar} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './SidebarRow.css'

export default function SidebarRow() {


    const [seed, setSeed] = useState() 

    useEffect(()=>{
        setSeed(Math.floor(Math.random()* 5000))

    },[])

    const img = `https://avatars.dicebear.com/api/human/${seed}.svg`
    return (
        <Link className='sidebar_row_main' to={''}>
            <div className='sidebar_row'>
                <div className='sidebar_left'>
                    <Avatar src={img} />
                    <div className='sidebar_info'>
                        <strong  >Channel Name</strong>
                        <p className='chat_text'>Message</p>
                    </div>
                </div>
                <p>time</p>
            </div>
            <div className='chat_line'/>
        </Link>
        
    )
}