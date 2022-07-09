import React from "react";
import Typed from "react-typed";
import '../../css/style.scss';
import NET from 'vanta/dist/vanta.net.min';
import { FaHandSparkles } from 'react-icons/fa';

// img
import homeImg from '../../assets/img/home-main.svg';

// Content for react-typed line
const textLines = ['Front-End Developer', 'React Developer', 'Junior Software Developer', 'Nice Person :)']

class Home extends React.Component {
constructor() {
super()
this.vantaRef = React.createRef()
}

// Background
componentDidMount() {
this.vantaEffect = NET({
el: this.vantaRef.current,
mouseControls: false,
touchControls: true,
gyroControls: false,
minHeight: 200.00,
minWidth: 200.00,
scale: 1.00,
scaleMobile: 1.00,
color: 0x58ffd4,
backgroundColor: 0x0a192f

})
}

render() {
return (
<header className="header">
  <div className='header__background' ref={this.vantaRef}>

    <div className="container">
      <div className="header__intro">
        <h2>Hi There! <span className="header__intro-hand">
            <FaHandSparkles /></span></h2>
        <h1>I'm ANASTASIIA <span className="header__intro-lastname">VOLOSEVYCH</span></h1>

        {/* Typed animation */}
        <Typed className="header__intro-typed" strings={textLines} typeSpeed={60} backSpeed={50} loop></Typed>
      </div>

      {/* <div className="header__img">
        <img src={homeImg} alt="" />
      </div> */}

    </div>
  </div>
</header>
)
}


}

export default Home