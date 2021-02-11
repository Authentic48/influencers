import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


import './StyleSearchInput.css'

export default function SearchInput({Icon, placeholder }) {
    const [keyword, setKeyword] =  useState('')
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(keyword);
        if(keyword.trim() ){
            history.push(`/influencer/search/${keyword}`)
        }else{
            history.push('/influencer')
        }
    }
    return (
        <form onSubmit={(e) =>handleSubmit(e)} className='custom_input'  >
            {Icon && <Icon style={{color: 'gray'}} />}
            <input 
            value={keyword} 
            onChange={(e) => setKeyword(e.target.value)} 
            className='custom_input__input' 
            placeholder={placeholder} />
            <button type='submit' style={{display: 'none'}}></button>
        </form>
    )
}
