import { Alert } from "react-bootstrap";
import { useState } from "react";
import Cookies from "js-cookie";
import React from "react";


const NoOfAppointment = () => {
  const [appointment, setAppointment] = useState({
    place: "Sonarpura",
    date: "",
    no_of_appointments: "",
    time: "9:00",
    open: true,
  });
  let name, value;
  const changeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setAppointment({ ...appointment, [name]: value });
    console.log(name);
    console.log(value);
  };

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("");

  const createAppointment = async (e) => {
    e.preventDefault();
    const auth_token = Cookies.get("ADMIN_APP_ID");
    const { place, date, no_of_appointments, time, open } = appointment;

    const res = await fetch("/admin/appointment/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth_token,
      },
      body: JSON.stringify({
        place,
        date,
        no_of_appointments,
        time,
        open,
      }),
    });

    const data = await res.json();

    if (data.status === 500) {
      setToastMessage(data.message);
      setToastVariant("danger");
      setShowToast(true);
    } else {
      setToastMessage(data.message);
      setToastVariant("success");
      setShowToast(true);
    }
  };

  return (
    <form
      method="POST"
      className="w-50 m-auto mt-5"
      onSubmit={createAppointment}
    >
      <div className="form-floating mb-3">
        <input
          type="date"
          class="form-control"
          name="date"
          value={appointment.name}
          id="date"
          onChange={changeHandler}
          required
        />
        <label for="date">Select Date</label>
      </div>
      <div className="form-floating">
        <input
          type="number"
          class="form-control"
          value={appointment.name}
          id="no_of_appointments"
          name="no_of_appointments"
          placeholder="No of Appointments"
          onChange={changeHandler}
          required
        />
        <label for="no_of_appointments">No of Appointments</label>
      </div>
      <br />
      <div className="form-floating">
        <select
          class="form-select"
          onChange={changeHandler}
          name="place"
          required
        >
          <option disabled>Select Place</option>
          <option value="Paharia">Paharia</option>
          <option value="Sonarpura">Sonarpura</option>
        </select>
      </div>
      <button className="btn btn-outline-warning mt-3 w-100">
        Create Appointment
      </button>
      <p></p>
      <Alert
        show={showToast}
        variant={toastVariant}
        onClose={() => setShowToast(false)}
        dismissible
      >
        {toastMessage}
      </Alert>
    </form>
  );
};

export default NoOfAppointment;
