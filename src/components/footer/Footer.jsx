import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a hreft='#' className='footer_logo>'>LANCE</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experiences</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href=''></a>
        <a href=''></a>
        <a href=''></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy, LANCE TERO. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer