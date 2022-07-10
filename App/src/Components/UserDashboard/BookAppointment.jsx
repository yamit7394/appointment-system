import React from "react";
import Card from "./Card/Card";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState([]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [messageBody, setMessageBody] = useState("");

  const handleMessage = (success, bookingID) => {
    if (success) {
      setTitle("Success");
      setMessageBody(
        "Appointment booked successfully. Here is your Appointment Booking ID : " +
          bookingID
      );
      setShow(true);
    } else {
      setTitle("Error");
      setMessageBody("Error in booking appointment");
      setShow(true);
    }
  };

  const modelCloseHandler = () => {
    setShow(false);
    navigate("/user/appointment");
  };

  useEffect(() => {
    fetch("/user/appointment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Cookie.get("APP_ID"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setAppointment(res);
      });
  }, []);
  return (
    <>
      {appointment.length === 0 ? (
        <p>No Appointments Available</p>
      ) : (
        appointment.map((app) => (
          <Card appointment={app} message={handleMessage} />
        ))
      )}
      <Modal
        show={show}
        onHide={modelCloseHandler}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{messageBody}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={modelCloseHandler}>OK</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookAppointment;
