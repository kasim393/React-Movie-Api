import './sidebar.css'
import React, { useState } from "react"
import {  Link } from "react-router-dom";
const Sidebar = () => {

const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <div>
     <i className={navbarOpen ? "far fa-times-circle side_icon" : "fas fa-bars side_icon"} onClick={handleToggle }></i>
    <div className={`sidebar ${navbarOpen ? " showMenu" : ""}`}>
      <div className="sidebar-item">
      <Link  className={`side-link ${navbarOpen ? "" : " active-link"}`} to="/" 
  onClick={closeMenu} >
      <i className="fas fa-home"></i>
        <p>Home</p>
      </Link>
      </div>
      <div className="sidebar-item">
      <Link  className={`side-link`} to="/movie" onClick={closeMenu} >
      <i className="fas fa-film"></i>
        <p>Movie</p>
      </Link>
      </div>
      <div className="sidebar-item">
      <Link  className={`side-link`} to="/tv" onClick={closeMenu} >
      <i className="far fa-play-circle"></i>
        <p>Tv Series</p>
      </Link>
      </div>
      
      <div className="sidebar-item">
      <i className="far fa-user"></i>
        <p>Profile</p>
      </div>
      <div className="sidebar-item last">
      <i className="fas fa-cog"></i>
        <p>Settings</p>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
