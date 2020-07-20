import React, { useContext } from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

import { NavContext } from '../contexts/navContext'
import '../styles/nav.scss'

const Nav = ({ siteTitle }) => {
    const { sidebarOpen, toggleSidebar } = useContext(NavContext)
    const sidebar = sidebarOpen ? 'open' : 'close'

    return(
        <Headroom>
            <header className="container header">
                <h2 className="logo">{siteTitle}</h2>
                <nav className={`nav ${sidebar}`}>
                    <ul className="nav-bar">

                        <li className="nav-item">
                            <Link to="/" className="nav-link" activeClassName="active">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="portfolio" className="nav-link" activeClassName="active">portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://blog.folajomi.dev" target="_blank" rel="noopener noreferrer" className="nav-link" activeClassName="active">blog</a>
                        </li>
                        <li className="nav-item">
                            <Link to="talks" className="nav-link" activeClassName="active">talks</Link>
                        </li>

                    </ul>
                    <div className="sidebar-toggle" onClick={toggleSidebar}>
                        <span className="bar" id="1"></span>
                        <span className="bar" id="2"></span>
                        <span className="bar" id="3"></span>
                    </div>
                </nav>
            </header>
        </Headroom>
    )
}

export default Nav