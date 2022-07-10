import React from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [messageData, setMessageData] = useState({
    name: "",
    message: "",
    mobile: "",
    status: true,
  });
  let name, value;

  const changeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setMessageData({ ...messageData, [name]: value });
  };

  const submitClickHandler = async (e) => {
    e.preventDefault();
    const { name, message, mobile, status } = messageData;
    console.log(messageData);
    const res = await fetch("/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        message,
        mobile,
        status,
      }),
    });

    const data = await res.json();

    if (data.status === 203) {
      setVariant("danger");
      setAlertMessage("Something went wrong. Please try again later.");
      setShow(true);
    } else {
      setVariant("success");
      setAlertMessage(data.message);
      setShow(true);
    }
  };

  return (
    <section className="section contact" id="contact-us">
      <h2 className="text-center mb-5">Contact Us</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5 ">
            <div className="address-block">
              <div className="media">
                <div className="media-body">
                  <i className="bi bi-map text-warning fs-2"></i>
                  <h3 className="d-inline mx-3">Location</h3>
                  <p>
                    Om Nagar Colony, Phase-1, Lane Number 5 (Near Kashi Enclave
                    Colony, Infront of Maa Annapurna Marriage Lawn) Akatha,
                    Paharia, Varanasi, Uttar Pradesh 221007
                  </p>
                </div>
              </div>

              <div className="media">
                <div className="media-body">
                  <i className="bi bi-telephone text-warning fs-2"></i>
                  <h3 className="d-inline mx-3">Phone</h3>
                  <p>+91-9415522858</p>
                </div>
              </div>

              <div className="media">
                <div className="media-body">
                  <i className="bi bi-envelope text-warning fs-2"></i>
                  <h3 className="d-inline mx-3">Email</h3>
                  <p>info@relaxphysiotherapy.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="contact-form">
              <form method="POST" className="row">
                <div className="col-lg-6 mt-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control main"
                    placeholder="Name"
                    onChange={changeHandler}
                    value={messageData.name}
                    required
                  />
                </div>

                <div className="col-lg-6 mt-3">
                  <input
                    type="text"
                    name="mobile"
                    className="form-control main"
                    placeholder="Phone"
                    onChange={changeHandler}
                    value={messageData.phone}
                    required
                  />
                </div>

                <div className="col-lg-12 mt-3">
                  <textarea
                    name="message"
                    rows="5"
                    onChange={changeHandler}
                    value={messageData.message}
                    className="form-control main"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <div className="col-md-12 text-right mt-3">
                  <button
                    className="btn btn-outline-warning"
                    type="submit"
                    onClick={submitClickHandler}
                  >
                    Send Message
                  </button>
                </div>

                <div className="col-md-12 text-center mt-3">
                  <Alert
                    show={show}
                    variant={variant}
                    onClose={() => setShow(false)}
                    dismissible
                    delay={5000}
                    autohide
                  >
                    {alertMessage}
                  </Alert>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
