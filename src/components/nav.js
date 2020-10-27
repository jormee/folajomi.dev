import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { ThemeContext } from '../contexts/themeContext'

import Github from '../icons/github.svg'
import Twitter from '../icons/twitter-alt.svg'
import LinkedIn from '../icons/linkedin.svg'
import Crescent from '../icons/crescent.svg'
import Sun from '../icons/sun.svg'
import Home from '../icons/home.svg'
import Portfolio from '../icons/portfolio.svg'
import Blog from '../icons/blog.svg'
import Talks from '../icons/talk.svg'

import logoLight from '../images/Logo - Light.png'
import logoDark from '../images/Logo - Dark.png'
import '../styles/nav.scss'

const Nav = ({ siteTitle, route }) => {
    const { theme, isLightTheme, themeToggle } = useContext(ThemeContext)
    const logo = isLightTheme ? logoLight : logoDark

    return(
        
            <header className={`header ${route==="Home" ? "dark" : theme}`}>
                <div className="container">
                    <div className="links">
                        <Link to="/" className="logo"><img alt="logo" src={route==="Home" ? logoDark : logo} /></Link>

                        <ul className="social-links">
                            <li className="social-icon"><a href='https://twitter.com/folajomi__' aria-label="twitter-icon"><Twitter /></a></li>
                            <li className="social-icon"><a href='https://github.com/jormee' aria-label="github-icon"><Github /></a></li>
                            <li className="social-icon"><a href='https://linkedin.com/in/folajomi-shotunde' aria-label="linkedin-icon"><LinkedIn /></a></li>
                        </ul>
                    </div>
                    <div className="flex">
                        <nav className={`nav ${theme}`}>
                            <ul className="nav-bar">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" activeClassName="active">
                                        <Home className="nav-icon"/>
                                        <p>Home</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/portfolio" className="nav-link" activeClassName="active">
                                        <Portfolio className="nav-icon"/>
                                        <p>Portfolio</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="https://blog.folajomi.dev" target="_blank" rel="noopener noreferrer" className="nav-link" activeClassName="active">
                                        <Blog className='nav-icon' />
                                        <p>blog</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/talks" className="nav-link" activeClassName="active">
                                        <Talks className='nav-icon' />
                                        <p>Talks</p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="theme-toggle">
                            <button className="btn" onClick={() => themeToggle()}>
                                {isLightTheme ? <Crescent /> : <Sun />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default Nav