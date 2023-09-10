import React from 'react';
import NavigationMenu from '../components/NavigationMenu';

function Home() {
  return (
    <div className="main">
      <div id='header-name'>Abhilash Sreenivasa</div>
      <div id='header-identity'>Student | Software Engineer | Full-Stack Developer</div>
      <hr className='hr-large'/>
      <NavigationMenu />
      
      
    </div>
  );
}

export default Home;
