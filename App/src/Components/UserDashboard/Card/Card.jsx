import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
const getMonth = (month) => {
  switch (month) {
    case "01":
      return "January";
    case "02":
      return "February";
    case "03":
      return "March";
    case "04":
      return "April";
    case "05":
      return "May";
    case "06":
      return "June";
    case "07":
      return "July";
    case "08":
      return "August";
    case "09":
      return "September";
    case "10":
      return "October";
    case "11":
      return "November";
    case "12":
      return "December";
    default:
      return "";
  }
};
const Card = (props) => {
  const year = props.appointment.date.substring(0, 4);
  const month = props.appointment.date.substring(5, 7);
  const day = props.appointment.date.substring(8, 10);
  const auth_token = Cookies.get("APP_ID");

  const [data, setData] = useState({
    patient_name: "",
    mobile: "",
    owner: auth_token,
    appointment: "",
  });
  let name, value;

  const changeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const bookHandler = async (e) => {
    e.preventDefault();
    const { patient_name, mobile, owner } = data;
    const appointment = props.appointment._id;
    const res = await fetch("/user/appointment/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth_token,
      },
      body: JSON.stringify({
        patient_name,
        mobile,
        owner,
        appointment,
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      props.message(true, data);
    } else {
      props.message(false);
    }
  };

  return (
    <>
      <div className="col-sm-4">
        <div className="card card-purple text-dark">
          <div className="card-body">
            <h5 className="card-title">Book Appointment</h5>
            <p className="card-text"></p>
            <p className="card-text">
              <span>Date: {day + " " + getMonth(month) + " " + year}</span>
              <br />
              <span>Meeting time: 10:00 AM</span>
            </p>
            <form className=" m-auto">
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="patient_name"
                  value={data.name}
                  onChange={changeHandler}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="form-control"
                  id="mobile-no"
                  name="mobile"
                  value={data.mobile}
                  onChange={changeHandler}
                  placeholder="Mobile No"
                  required
                />
              </div>
              <button
                className="btn btn-success mt-2 w-100"
                onClick={bookHandler}
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
