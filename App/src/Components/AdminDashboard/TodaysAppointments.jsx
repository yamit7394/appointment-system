import React from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const TodaysAppointments = (props) => {
  const [show, setShow] = useState(false);

  const cancelHandler = async (e) => {
    const res = await fetch("/admin/appointment/cancel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Cookies.get("ADMIN_APP_ID"),
      },
      body: JSON.stringify({
        id: e.target.name,
      }),
    });
    if (res.status === 200) {
      props.cancel(e.target.name);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="col-sm-4">
      <div className="card card-purple text-dark">
        <div className="card-body">
          <h5 className="card-title">With: {props.appointment.patient_name}</h5>
          <p className="card-text">
            <span>Appointment No: </span>
            {props.appointment._id.substring(20, 24)}
          </p>
          <p className="card-text">
            <span>Contact No: </span>
            {props.appointment.mobile}
          </p>
          <div class="container px-4">
            <div class="row gx-5">
              <div class="col">
                <a
                  href={"#"}
                  class="btn btn-sm btn-outline-success "
                  name={props.appointment._id}
                  onClick={cancelHandler}
                >
                  <i class="bi bi-check2-circle"></i> Complete
                </a>
              </div>
              <div class="col">
                <a
                  href={"#"}
                  class="btn btn-sm btn-outline-danger mx-2"
                  name={props.appointment._id}
                  onClick={cancelHandler}
                >
                  <i class="bi bi-x-circle"></i> Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-end" className="p-3">
        <Toast
          className="d-inline-block m-1"
          bg="danger"
          onClose={() => setShow(false)}
          show={show}
          delay={5000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>
            Internal Server Error. Please try again Later.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default TodaysAppointments;
