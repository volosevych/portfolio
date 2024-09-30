import React from 'react'
import image from '../../assets/file.jpg';

const aboutme = () => {
  return ( 
    <div className='aboutme' id='about'>
      <div className="aboutme-wrapper">
        <div className="aboutme-info">
        <div className="aboutme-title">
            <span>01.</span> About Me
        </div>

        <div className="aboutme-text">
                <p>
                    I began my coding journey back in <span>2019</span> while I was still in high school. Initially drawn to the world of <span>Front-End Development</span>.
                    I quickly fell in love with crerating interactive and visually appealing web applications.
                    Over the years, I have honed my skills primarily in <span>React</span> and <span>SASS</span>, which have become my go-to tools
                    for building <span>dynamic interfaces</span>. <br/> <br/>

                    Recognizing the importance of a well-rounded skill set, I also pursued courses in full-stack development. 
                    This had equipped me with a solid understanding of both client-side and server-side technologies.
                    A am familuar with frameworks and libraries such as <span>Bootstrap</span> and <span>Material UI</span> for responsive design,
                    as well as databases like <span>MongoDB</span> and <span>SQL</span> for data management. <br/> <br/>

                    Additionally, I have experience with <span>Node.js</span>, allowing me to create robust <span>back-end</span> services to complement my front-end applications. 
                    My diverse skill set enables me to tackle projects from start to finish, ensuring a seamless integration of design and functionality. <br/> <br/>

                    As I continue to grow as a developer, <span>I am eager to take on new challenges and expand my knowledge further in the ever-evolving field of web development.</span>
                </p>
        </div>
        </div>

        <div className="aboutme-picture">
            <img className='styled-image' src={image} alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default aboutme
