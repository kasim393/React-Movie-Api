import React from 'react'
import './navbar.css'
import {FiSearch} from 'react-icons/fi'
import {IoIosNotificationsOutline} from 'react-icons/io'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <img src="assets/profile.png" alt="profile" />
        <div className="nav-two-row">
          <h4 className='Name'>Hi, Kasim Shaikh</h4>
          <p className='status'>How do you feel today?</p>
        </div>
      </div>
      <div className="nav-right">
        <div className="search">
        {/* <i className="nav-search-icon fas fa-search"></i> */}
        <FiSearch className='nav-search-icon' />
        <input type="text" placeholder='What movies do you want to watch?' className='nav-search' />
        </div>
        {/* <i className="nav-noti far fa-bell"></i> */}
        <IoIosNotificationsOutline className="nav-noti" />
        <div className="nav-weather">
          <img src="assets/cloudy.png" alt="" />
          <div className="nav-two-row">
          <h5 className='degree'>32°C</h5>
          <p className='location'>Mumbai, India</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
