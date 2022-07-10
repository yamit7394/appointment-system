import React from "react";

const AppointmentCard = (appointment) => {
  const appointmentCancelHandler = () => {
    console.log("Appointment cancelled");
    appointment.appointments[1](1, appointment.appointments[0]._id);
  }
  const appointmentRescheduleHandler = () => {
    appointment.appointments[1](2, appointment.appointments[0]._id);
  }
  return (
      <div className="col-sm-4">
        <div className="card card-purple text-dark">
          <div className="card-body">
            <h5 className="card-title">With: {appointment.appointments[0].patient_name}</h5>
            <p className="card-text">
                <span >Appointment No: {appointment.appointments[0]._id.substring(18, 24)}</span>
            </p>
            <p className="card-text">
                <span>Meeting time: 10:00 a.m.</span>
            </p>
            <p className="card-text">
                <span>Contact No: {appointment.appointments[0].mobile}</span>
            </p>
            <button className="btn btn-sm btn-outline-danger mx-2"  onClick={appointmentCancelHandler}>
                <i className="bi bi-x-circle"></i> Cancel
            </button>
            <button className="btn btn-sm btn-outline-primary" onClick={appointmentRescheduleHandler}>
            <i className="bi bi-arrow-repeat"></i> Reschedule
            </button>
          </div>
        </div>
      </div>
  );
};

export default AppointmentCard;
