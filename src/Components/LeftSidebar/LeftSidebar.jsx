import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import { MdOutlineVideoLibrary} from "react-icons/md"
// import shorts from './shorts.png'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'

import { FaGamepad } from 'react-icons/fa'; // Importing Gaming icon
import { RiCarLine } from 'react-icons/ri'; // Importing Automobiles icon
import { IoMdFootball } from 'react-icons/io'; // Importing Sports icon
import { GiJoystick } from 'react-icons/gi'; // Importing Entertainment icon
import { IoMdPhonePortrait } from 'react-icons/io'; // Importing Technology icon
import { IoMusicalNotesOutline } from 'react-icons/io5'; // Importing Music icon
import { BsPencilSquare } from 'react-icons/bs'; // Importing Blogs icon
// import { IoNewspaperOutline } from 'react-icons/io'; // Importing News icon
function LeftSidebar() {
  return (
    <div className='container_leftSidebar'>
        <NavLink to={'/'} className="icon_sidebar_div">
            <AiOutlineHome size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon">Home</div>
        </NavLink>
        <NavLink to={'/library'} className="icon_sidebar_div">
            <MdOutlineVideoLibrary size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon">Library</div>
        </NavLink>
        {/* Here more video  */}
        <NavLink to={'/more'} className="icon_sidebar_div">
            <AiOutlineHome size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon">Watch More </div>
        </NavLink>
        {/*  <NavLink to={'/automobiles'} className="icon_sidebar_div">
            <RiCarLine size={22} className={`icon_sidebar ${category===2?"active":""}`} onClick={()=>setCategory(2)}/>
            <div className="text_sidebar_icon">Automobiles</div>
        </NavLink>
        <NavLink to={'/sports'} className="icon_sidebar_div">
            <IoMdFootball size={22} className={`icon_sidebar ${category===17?"active":""}`} onClick={()=>setCategory(17)}/>
            <div className="text_sidebar_icon">Sports</div>
        </NavLink>
        <NavLink to={'/entertainment'} className="icon_sidebar_div">
            <GiJoystick size={22} className={`icon_sidebar ${category===24?"active":""}`} onClick={()=>setCategory(24)}/>
            <div className="text_sidebar_icon">Entertainment</div>
        </NavLink>
        <NavLink to={'/technology'} className="icon_sidebar_div">
            <IoMdPhonePortrait size={22} className={`icon_sidebar ${category===28?"active":""}`} onClick={()=>setCategory(28)}/>
            <div className="text_sidebar_icon">Technology</div>
        </NavLink>
      <NavLink to={'/music'} className="icon_sidebar_div">
            <IoMusicalNotesOutline size={22} className={`icon_sidebar ${category===10?"active":""}`} onClick={()=>setCategory(10)}/>
            <div className="text_sidebar_icon">Music</div>
        </NavLink>
        <NavLink to={'/blogs'} className="icon_sidebar_div">
            <BsPencilSquare size={22} className={`icon_sidebar ${category===22?"active":""}`} onClick={()=>setCategory(22)}/>
            <div className="text_sidebar_icon">Blogs</div>
        </NavLink> */}
         
    </div>
  )
}

export default LeftSidebar
