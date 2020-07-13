import React from "react"
import Headroom from 'react-headroom'

import GitHub from "../icons/github.svg"
import LinkedIn from "../icons/linkedin.svg"
import Twitter from "../icons/twitter-alt.svg"

import '../styles/header.scss'

const Header = ({ siteTitle }) => {
  return (
    <header className="header">
      <Headroom>
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
      </Headroom>

      <section className="container hero">
        <p className="name">Folajomi Shotunde</p>
        <ul className="titles">
          <li className="title">FrontEnd Developer</li>
          <li className="title">Project Manager</li>
          <li className="title">Crytpo Enthusiast</li>
        </ul>
        <div className="socials">
          <GitHub className= "social-icon" />
          <Twitter className= "social-icon" />
          <LinkedIn className= "social-icon" />
        </div>

      </section>
    </header>
  )
}

export default Header
