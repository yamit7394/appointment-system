import React from "react";
import AppointmentCard from "./Card/AppointmentCard";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Modal, Button } from "react-bootstrap";

const Appointments = () => {
  let appointmentID;

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const handlerFunction = (valid, appID) => {
    if (valid === 2) {
      setTitle("Unavailable");
      setMessageBody("This feature is in Testing.");
      setShow(true);
    } else if (valid === 1) {
      appointmentID = appID;
      CancelAppointment();
    }
  };

  const [appointments, setAppointments] = useState([]);

  const CancelAppointment = async () => {
    const res = await fetch("/user/appointment/cancel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Cookies.get("APP_ID"),
      },
      body: JSON.stringify({
        id: appointmentID,
      }),
    });

    if (res.status === 200) {
      setTitle("Successfully Cancelled");
      setMessageBody("Appointment cancelled successfully");
      setShow(true);
    } else {
      setTitle("Error");
      setMessageBody("Error in cancelling appointment");
      setShow(true);
    }
  };

  const modelCloseHandler = () => {
    setShow(false);
    window.location.reload();
  };
  useEffect(() => {
    console.log("fetching appointments");
    fetch("/user/appointment/show", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Cookies.get("APP_ID"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setAppointments(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {appointments.length === 0 ? (
        <p>No Appointments Booked</p>
      ) : (
        appointments.map((app) => (
          <AppointmentCard appointments={[app, handlerFunction]} />
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

export default Appointments;
