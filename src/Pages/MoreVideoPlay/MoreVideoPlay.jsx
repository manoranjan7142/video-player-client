import React from 'react'

import './MoreVideoPlay.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
const MoreVideoPlay = () => {

  const { videoId, categoryId}= useParams();

  return (
    <div className='play-container'>
          <PlayVideo videoId={videoId}/> 
          <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default MoreVideoPlay
