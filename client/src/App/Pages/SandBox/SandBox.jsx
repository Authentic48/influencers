import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import {uploadFile} from '../../Redux/Influencer/photos/PhotosAction';

export default function SandBox() {
  const [ photos , setPhotos] = useState([])
  const dispatch = useDispatch ()
  return (
    <div style={{margin: 100}}>
      <input type='file'  onChange={(event)=>setPhotos(event.target.files[0])} />
      <button onClick={() => dispatch(uploadFile(photos))}> upload</button>
    </div>
  )
}

