import React from 'react'
import './Navbar.css';
import { useState } from 'react';
import womanImg from '../../assets/woman.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='header-container'>
      <div className='header-wrapper'>
        <div className="header-left">
          <Link to='/'>Blog React App</Link>
        </div>
        <div className="header-center">
          <div className="header listitem">Home</div>
          <div className="header listitem">About</div>
          <div className="header listitem">Contact</div>
          <div className="header listitem">Categories</div>
        </div>
        <div className="header-right">
          <img
            className='header-img'
            onClick={() =>
            setShowModal(prev => !prev)}
            src={womanImg} alt="" />
          <Link to='/create'>Create</Link>
          <span>Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar