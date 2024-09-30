import React from 'react'

const sayHello = () => {
  return (
    <div className='sayHello' id='contact'>
      <div className="container">
        <div className="sayHello-title">
          <span>03.</span> What's Next?
        </div>

        <div className="sayHello-getInTouch">
          Get In Touch
        </div>
        
        <div className="sayHello-text">
        Currently, I'm looking for a job. If you're interested in hiring me, you're more than welcome to contact me—or if you just want to say hello!
        </div>

        <button className='resume'>
          <a href="mailto:volosevichh@gmail.com">Say Hello</a>
          </button>
      </div>
    </div>
  )
}

export default sayHello
