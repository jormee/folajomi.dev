import React from 'react'

import Twitter from "../icons/twitter-alt.svg"
import GitHub from "../icons/github.svg"
import LinkedIn from "../icons/linkedin.svg"

import "../styles/heroStyles.scss"

const Hero = () => {
    return(
        <section className="hero-section">
            <div className="container flex-center">
                <h2 className="name">Folajomi Shotunde</h2>
                <div className="titles"></div>
                <div className="socials">
                    <a href="https://twitter.com/folajomi__" className="social-icon" aria-label="twitter-icon"><Twitter /></a>
                    <a href="https://github.com/jormee" className="social-icon" aria-label="github-icon"><GitHub /></a>
                    <a href="https://linkedin.com/in/folajomi-shotunde" className="social-icon" aria-label="linkedin-icon"><LinkedIn /></a>
                </div>
            </div>
        </section>
    )
}

export default Hero