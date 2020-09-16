import React, { useContext } from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

import { NavContext } from '../contexts/navContext'
import { ThemeContext } from '../contexts/themeContext'

import Github from '../icons/github.svg'
import Twitter from '../icons/twitter-alt.svg'
import LinkedIn from '../icons/linkedin.svg'
import Crescent from '../icons/crescent.svg'
import Sun from '../icons/sun.svg'

import logoLight from '../images/Logo - Light.png'
import logoDark from '../images/Logo - Dark.png'
import '../styles/nav.scss'

const Nav = ({ siteTitle }) => {
    const { sidebarOpen, toggleSidebar } = useContext(NavContext)
    const { isLightTheme, themeToggle } = useContext(ThemeContext)
    const sidebar = sidebarOpen ? 'open' : ''

    return(
        <Headroom>
            <header className="container header">
                <div className="links">
                    <Link to="/" className="logo"><img alt="logo" src={isLightTheme ? logoLight : logoDark} /></Link>

                    <ul className="social-links">
                        <li className="social-icon"><a href='https://twitter.com/folajomi__'><Twitter /></a></li>
                        <li className="social-icon"><a href='https://github.com/jormee'><Github /></a></li>
                        <li className="social-icon"><a href='https://linkedin.com/in/folajomi-shotunde'><LinkedIn /></a></li>
                    </ul>
                </div>
                <nav className={`nav ${sidebar}`}>
                    <ul className="nav-bar">

                        <li className="nav-item">
                            <Link to="/" className="nav-link" activeClassName="active" onClick={() => toggleSidebar()}>home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" activeClassName="active" onClick={() => toggleSidebar()}>about</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-link" activeClassName="active" onClick={() => toggleSidebar()}>portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://blog.folajomi.dev" target="_blank" rel="noopener noreferrer" className="nav-link" activeClassName="active">blog</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/talks" className="nav-link" activeClassName="active" onClick={() => toggleSidebar()}>talks</Link>
                        </li>

                    </ul>
                </nav>
                <div className="sidebar-toggle" onClick={toggleSidebar}>
                    <div className="bar" id="1"></div>
                    <div className="bar" id="2"></div>
                    <div className="bar" id="3"></div>
                </div>
                <div className="theme-toggle">
                    <button className="btn" onClick={() => themeToggle()}>
                        {isLightTheme ? <Crescent /> : <Sun />}
                    </button>
                </div>
            </header>
        </Headroom>
    )
}

export default Nav