import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUserAlt} from 'react-icons/fa'
import {HiBookOpen} from 'react-icons/hi'
import {HiMail} from 'react-icons/hi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiBookOpen/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><HiMail/></a>
    </nav>
  )
}

export default Nav