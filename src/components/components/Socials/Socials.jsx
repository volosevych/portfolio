import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Socials = () => {
  return (
    <section className="socials background">
        <div className="container">
            <div className="socials__text">
                <h1>FIND ME ON</h1>

                <p>Feel free to <span className='purple'>connect</span> with me</p>
            </div>

            <div className="socials__links">
                <a href="#home"><FaInstagram/></a>
                
            </div>
        </div>
    </section>
  )
}

export default Socials