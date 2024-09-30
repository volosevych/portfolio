import React from 'react'
import {faGithub, faInstagram, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socials = () => {
  return (

    <>
      <footer className="socials">
      <div className="container">
        <div className='social-links'>
                  <a href="https://github.com/volosevych" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                  <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="https://x.com/kuromayuu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
              </div>

                  <a className='social-email' href="mailto:volosevichh@gmail.com">volosevichh@gmail.com</a>
      </div>
    </footer>

    <footer className='notation'>
      <p>
        Built by <span>Anastasiia Volosevych</span>. <br/> Designed by <span>Brittany Chiang</span>.
      </p>
    </footer>

    <footer className='socials-mobile'>
        <div className="container">
          <div className="socials-mobile-links">
                  <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                  <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
          </div>
        </div>
    </footer>
  </>
  )
}

export default socials
