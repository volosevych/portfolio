import React, { useState } from 'react';
import './styles/styles.css';

import { Navigation, Introduction, Aboutme, Socials, Myprojects, SayHello } from './components';

function App() {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <>
      <Navigation onToggle={setIsBlurred} />
    
      <div className={`body ${isBlurred ? 'blurred' : ''}`}>
        
        <Introduction />
        <Aboutme />
        <Myprojects />
        <SayHello/>
        <Socials/>
      </div>
    </>
  );
}

export default App;
