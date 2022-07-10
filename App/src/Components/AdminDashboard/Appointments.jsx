import React from "react";
import { useState, useEffect } from "react";
import TodaysAppointments from "./TodaysAppointments";
import Cookies from "js-cookie";

const Appointments = () => {
  const cancelAppointment = (id) => {
    const filteredAppointment = appointments.filter((item) => {
      return item._id !== id;
    });
    setAppointments(filteredAppointment);
  }
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const auth_token = Cookies.get("ADMIN_APP_ID");
    fetch("/admin/appointment/show", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth_token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setAppointments(res);
      });
  }, []);

  return (
    <>
      {appointments.length === 0 ? (
        <p>No new Appointments</p>
      ) : (
        appointments.map((appointment) => (
          <TodaysAppointments appointment={appointment} cancel={cancelAppointment} />
        ))
      )}
    </>
  );
};

export default Appointments;
