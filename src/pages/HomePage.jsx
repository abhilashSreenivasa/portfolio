import React from 'react';
import NavigationMenu from '../components/NavigationMenu';

function Home() {
  return (
    <div className="main">
      <div id='header-name'>Abhilash Sreenivasa</div>
      <div id='header-identity'>Student | Software Engineer | Full-Stack Developer</div>
      <hr className='hr-large'/>
      <NavigationMenu />
      <div className='main-content'>
        <img src="headshot.jpeg" id='headshot'></img>
        <div className='main-content-links'>
            <div className='main-content-links-data'>
                <img className='icon' src='icons/github-sign.png'></img>
                <span> Github : github.com/abhilashSreenivasa </span>        
            </div>
            <div className='main-content-links-data'>
                <img className='icon' src='icons/linkedin.png'></img>
                <span> Linkedin : ln/abhilashSreenivasa </span>        
            </div>
            <div className='main-content-links-data'>
                <img className='icon' src='icons/instagram.png'></img>
                <span> Instagram : instagram.com/abhilashSreenivasa </span>        
            </div>
            <hr className='hr-small'/>
            <div className='main-content-links-data'>
                <img className='icon' src='icons/professional-development.png'></img>
                <span> 2+ years of professional experience</span>        
            </div>
            <div className='main-content-links-data'>
                <img className='icon' src='icons/mortarboard.png'></img>
                <span> Masters in Computer Science</span>        
            </div>
            

        </div>
      </div>
      
    </div>
  );
}

export default Home;
