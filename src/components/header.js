import React from "react"

import '../styles/header.scss'

const Header = ({ siteTitle }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container nav__container">
          <h2 className="logo">{siteTitle}</h2>
          <ul className="nav-bar">
            <li className="nav-item">
              <a href="/" className="nav-link">home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">about</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
