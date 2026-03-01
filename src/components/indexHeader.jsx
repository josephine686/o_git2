import { useState } from 'react'
import '../styles/indexHeader.scss'
import logo from '../assets/LOGO.svg'
import { Link } from 'react-router-dom';


function IndexHeader() {

  return (
    <>
      <nav className='header'>
        <img className="logo-header" src={logo} alt="logo" />
        <div className="link">
          <Link to="/">Accueil</Link>
          <Link to="/apropos">À propos</Link>
        </div>
      </nav>

    </>
  )
}

export default IndexHeader
