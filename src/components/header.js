import React from "react"
import { Link } from 'gatsby'
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
                <Link to="/" className="nav-link" activeClassName="active">home</Link>
              </li>
              <li className="nav-item">
                <Link to="#about" className="nav-link" activeClassName="active">about</Link>
              </li>
              <li className="nav-item">
                <Link to="#projects" className="nav-link" activeClassName="active">projects</Link>
              </li>
              <li className="nav-item">
                <Link to="#contact" className="nav-link" activeClassName="active">contact</Link>
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
