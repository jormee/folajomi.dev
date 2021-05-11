import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Send from '../icons/send.svg'
import Mail from '../icons/mail.svg'
import Mention from '../icons/mention.svg'
import User from '../icons/user.svg'
import contactImg from '../images/contact.png'


import '../styles/sharedComponents.scss'
import '../styles/contact.scss'

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Contact Me" />
        <div className="container">

          <div className="page">
            <section className='page-header'>
              <h1 className='page-title'>Shoot me an Email</h1>
              <div className='page-description'>
                <p>Hey there <span role='img' aria-labelledby="waving hand">👋🏾</span>, would you like to work together? Shoot me an email by filling out the email form below <span role='img' aria-labelledby="pointing hand">👇🏾</span>.</p>
              </div>         
            </section>
            
            <form 
              method = "post" 
              action ="https://formspree.io/f/xrgrelrn" 
              className="email-form"
            >
              <h1 className="form-header">Send an Email</h1>
              <div className="text">
                <input type="text" name="name" autoComplete="off" required/>
                <span className="placeholder-icon"><User /></span>
                <label htmlFor="name" className="placeholder">Name:</label>
              </div>
              <div className="text">
                <input type="email" name="_replyto" autoComplete="off" required/>
                <span className="placeholder-icon"><Mention /></span>
                <label htmlFor="email" className="placeholder">Email:</label>
              </div>
              <div className="text">
                <textarea type="textarea" name="message" autoComplete="off" required/>
                <span className="placeholder-icon"><Mail /></span>
                <label htmlFor="message" className="placeholder">Your Message:</label>
              </div>
              <input type="text" name="_gotcha" style={{display: "none"}} />

              <button className="btn btn-submit">
                <p>Send</p>
                <Send />
              </button>
            </form>
          </div>
        </div>
    </Layout>
  )
}

export default IndexPage
