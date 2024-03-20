import React from 'react'

import './AddExtraNavbar.css'
import menu_icon from '../../assets/menu.png'
// import logo from '../../assets/logo.png'
// import search_icon from '../../assets/search.png'
// import upload_icon from '../../assets/upload.png'
// import more_icon from '../../assets/more.png'
// import notification_icon from '../../assets/notification.png'
// import profile_icon from '../../assets/jack.png'
// import { Link } from 'react-router-dom'

const AddExtraNavbar = ({ setSidebar }) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
           {/* <Link to='/'><img className='logo' src={logo} alt="" /></Link>  */}
        </div>
    </nav>
  )
}

export default AddExtraNavbar
