import React from "react";
import "./Services.css";
import Card from "./Card";

const Services = () => {
  const cardData = [
    {
      title: "TECAR THERAPY",
      description:
        "TECAR therapy is a form of combined contact diathermy and electrotherapy. It is a medical practice that applies electromagnetic energy to biological tissue.",
    },
    {
      title: "SHOCKWAVE THERAPY",
      description:
        "Shockwave therapy is a multidisciplinary device used in orthopaedics, physiotherapy, sports medicine, urology and veterinary medicine.",
    },
    {
      title: "LASER THERAPY",
      description:
        "Laser therapy is a medical treatment that uses a strong beam of light to cut, burn, or destroy tissue. The term LASER stands for light amplification by stimulated emission of radiation.",
    },
    {
      title: "PEMF THEREPY",
      description:
        "PEMF therapy has no known side effects and is considered a safe effective approach to pain management without the use of drugs.",
    },
    {
      title: "NEUROMUSCULAR THERAPY",
      description:
        "Neuromuscular therapy (NMT) is a precise, thorough examination and of the body’s soft tissues using regionally oriented protocols that are taught in a step-by-step process.",
    },
    {
      title: "HEALING BY NUTRITION",
      description:
        "It’s important to eat well in order to heal well. Power foods, with higher amounts of calories, include protein, vitamins A and C, and sometimes zinc.",
    },
  ];
  return (
    <div className="services container" id="services">
      <h1>Services</h1>
      <br/>
      <div className="section-title">
        <p>
          We are proud to offer a wide range of physiotherapy services. Our team
          of professional therapists specialize in providing relief from pain
          and rehabilitative therapy across our network of physiotherapy
          clinics, partner hospitals and at patient's home..
        </p>
      </div>
      <br/>
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <Card data={cardData[0]} />
        </div>

        <div className="col-lg-4 col-md-4">
          <Card data={cardData[1]} />
        </div>

        <div className="col-lg-4 col-md-4">
          <Card data={cardData[2]} />
        </div>
        <div className="col-lg-4 col-md-4">
          <Card data={cardData[3]} />
        </div>
        <div className="col-lg-4 col-md-4">
          <Card data={cardData[4]} />
        </div>
        <div className="col-lg-4 col-md-4">
          <Card data={cardData[5]} />
        </div>
      </div>
    </div>
  );
};

export default Services;
