import React,{useState} from 'react'

import './MoreVideo.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
const MoreVideo = () => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar  category={category} setCategory={setCategory}/>
      <div className="container">
        <Feed category={category}/>
      </div>
    </>
  )
}

export default MoreVideo
