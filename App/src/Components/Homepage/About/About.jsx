import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about" id="about-us">
        <div className="row">
          <div className="col-lg-7 col-md-4">
            <div className="about-content container">
                
              <h1>About Us</h1>
              <br/>
              <p>
                Relax Physiotherapy Clinic Provides Best Physiotherapy in
                Varanasi, Relax Physiotherapy Clinic is a Physical Therapy /
                Physiotherapy Clinic located in Bhelupura and Paharia, Varanasi.
              </p>
              <br/>
              <p>
                The clinic is visited by doctors like Dr. Shekher Sharma. Some
                of the services provided by the Clinic are Physiotherapy, Joint
                Mobilization, Heat Therapy Treatment, Range Of Motion Excercise
                and Postural Training, etc.
              </p>
                <br/>
                <h3>Dr. Shekhar Sharma</h3>
                <p>Consulting Orthopedic, Sports and Spinal Manipulation Therapist</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-4">
            <div className="about-image"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
