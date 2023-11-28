import React from "react";
import me from "../src/image/me.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
  <>
    <div className="main-body">
      <div className="header-about"> 
        <div><h1 className="text-center display-6">Shashank Shekhar</h1></div>
        <div><img className="about-img" src={me} alt="me img" /></div>
      </div>
    </div>
    
    <div className="about-contact">
      <a className="about-icons" href="https://github.com/Shashanks2285">{<GitHubIcon></GitHubIcon>}</a>
      <a className="about-icons" href="www.linkedin.com/in/shashank-shekhar-013388235">{<LinkedInIcon></LinkedInIcon>}</a>
      <a className="about-icons" href="https://www.instagram.com/__shashank_raj__/">{<InstagramIcon></InstagramIcon>}</a>
      </div>

      <div className="medium">
        <p>Phone : 9472959448</p>
        <p>Email : shashankshekharlkrmit1@gmail.com</p>
      </div>
  </>
  )
}

export default Contact;