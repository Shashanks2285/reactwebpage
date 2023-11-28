import React from "react";
import image from "../src/image/web2.jpg";
import {NavLink} from "react-router-dom";

const About = () => {
  return (
  <>
    
    <section id="header" className="d-flex align-items-center">
    <div className="container_fluid" >  
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row2">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                      <h1>Welcome to <strong className="brand-name">About Section</strong></h1>
                      <h2 className="my-3">
                        This webpage is made by using "Bootstrap" & "Router-Dom method" using <strong className="brand-name">ReactJS</strong> to simulate Client Side routing.
                      </h2>
                      <div className="mt-3">
                        <NavLink href="#" className="btn-get-started">Get Started</NavLink>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <img src={image} alt="home img" className="img-fluid animated" />
                    </div>
                    </div>
                </div>
            </div>
        </div>    
    </section>
  </>
  )
}

export default About;