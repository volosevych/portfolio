import React, { useState } from 'react'
import { Link } from 'react-scroll';
import resume from '../../assets/resume/Resume.pdf';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    };

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
                            duration={-70}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                        >
                            <span>0.1</span> About
                        </Link>
                    </li>
                    <li>
                        <Link className='link'
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={-70}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                            >
                                <span>0.2</span> Projects
                            </Link>
                    </li>
                    <li>
                        <Link className='link'
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={-70}
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
