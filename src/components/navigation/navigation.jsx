import React, { useState } from 'react'
import { Link, scroller } from 'react-scroll';
import resume from '../../assets/resume/Resume.pdf';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    };

    const scrollToSection = (descktopId, mobileId) => {
        const targetId = window.innerWidth <= 768 ? mobileId : descktopId;
        scroller.scrollTo(targetId, {
            smooth: true,
            duration: 500,
        });
        setIsOpen(false);
    }

  return (
    <header className='header'>
        <div className="container">
            {/* LOGO */}
            <div className="logo">
                <svg
                    height="60"
                    width="60"
                    viewBox='0 0 100 100'
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon
                        points="50,5 90,25 90,75 50,95 10,75 10,25"
                        stroke='#5ef1d0'
                        strokeWidth="3"
                        fill="none"
                    />

                    <text
                        x="50%"
                        y="52%"
                        fill="#5ef1d0"
                        fontSize="32"
                        fontWeight="bold"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                    >
                        V
                    </text>
                </svg>
            </div>

            {/* Toggle Button for Mobile */}
            <button className='toggle-button' onClick={toggleNavbar}>
                {isOpen ? '✕' : '☰'}
            </button>

            {/* Navigation Links */}

            <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link className='link'
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                        >
                            <span>0.1</span> About
                        </Link>
                    </li>
                    <li>
                        <a
                            className='link'
                            onClick={() => scrollToSection('projects-desktop', 'projects-mobile')}
                        >
                            <span>0.2</span> Projects
                        </a>
                    </li>
                    <li>
                        <Link className='link'
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                
                                onClick={() => setIsOpen(false)}
                            >
                                <span>0.3</span> Contact
                            </Link>
                    </li>

                    <button className='resume'>
                        <a href={resume} download>
                            Resume
                        </a>
                    </button>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navigation
