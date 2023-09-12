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
       
        <img src="headshot.jpeg" id='headshot' alt='Abhilash headshot'></img>
        <div className='main-content-links'>
             <div className='main-content-links-data'>
                <img className='icon' src='icons/email.png' alt="Email Icon"></img>
                <span>Email : <a className='a-link' href='mailto:abhilash.sreenivasa@gmail.com'> abhilash.sreenivasa@gmail.com </a></span>        
            </div>
            <div className='main-content-links-data'>
                <img className='icon' src='icons/cell-phone.png' alt='Instagram Icon'></img>
                <span> Phone :<a className='a-link' href='tel:+15305919454'> +1(530)-591-9454 </a> </span>        
            </div>
            <div className='main-content-links-data'>
                <img className='icon' src='icons/github-sign.png' alt="Github Icon"></img>
                <span>Github : <a className='a-link' href='https://github.com/abhilashSreenivasa/'>  github.com/abhilashSreenivasa </a></span>        
            </div>
            <div className='main-content-links-data'>
                <img className='icon' src='icons/linkedin.png' alt="Linkedin Icon"></img>
                <span> Linkedin :<a className='a-link' href='https://www.linkedin.com/in/abhilash-sreenivasa-1b5256177/'> ln/abhilashSreenivasa</a> </span>        
            </div>
            <div className='main-content-links-data'>
                <img className='icon' src='icons/instagram.png' alt='Instagram Icon'></img>
                <span> Instagram :<a className='a-link' href='https://www.instagram.com/abhilash_sreeenivas/'> instagram.com/abhilashSreenivasa </a> </span>        
            </div>
            <hr className='hr-small'/>
            <div className='main-content-links-data'>
                <img className='icon' src='icons/professional-development.png' alt='Work Icon'></img>
                <span> 2+ years of professional experience</span>        
            </div>
            <div className='main-content-links-data'>
                <img className='icon' src='icons/mortarboard.png' alt='School icon'></img>
                <span> Masters in Computer Science</span>        
            </div>
        </div>

      </div>
      <div className='header-h3'>About</div>
      <hr className='hr-small'/>
      <div>
        <div className='info-text'><i>Hi, I'm Abhilash Sreenivasa, a passionate Computer Science Master's student.
With expertise in full-stack development, I bring hands-on skills in web technologies and a strong foundation in computer science principles.
I'm excited to embark on new challenges in the tech industry and look forward to graduating this December. Let's build something great together!
</i></div>
      </div>
    </div>
  );
}

export default Home;
