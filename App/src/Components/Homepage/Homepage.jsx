import React from "react";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Service from "./Services/Services";
import Contact from "./Contact/Contact";
import "./Homepage.css";
import Footer from "./Footer/Footer";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const bookHandler = () => {
    navigate('/user/appointments');
  }
  return (
    <>
      <Navbar />
      
      <div className="w-100 m-auto jumbotron">
        <div className="dark">
          <div className="h-100 p-5 text-white">
            <div className="content text-center">
              <h1>Relax Physiotherepy</h1>
              <br />
              <h4>Quality Care you trust</h4>
              <br />
              <button className="btn btn-outline-light" type="button" onClick={bookHandler}>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
