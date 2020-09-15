import React, { useContext } from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

import { NavContext } from '../contexts/navContext'

import logoLight from '../images/Logo - Light.png'
import logoDark from '../images/Logo - Dark.png'
import '../styles/nav.scss'

const Nav = ({ siteTitle }) => {
    const { sidebarOpen, toggleSidebar } = useContext(NavContext)
    const sidebar = sidebarOpen ? 'open' : ''

    return(
        <Headroom>
            <header className="container header">
                <Link to="/" className="logo"><img alt="logo" src={logoDark} /></Link>
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
            </header>
        </Headroom>
    )
}

export default Nav