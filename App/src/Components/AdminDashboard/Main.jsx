import { Routes, Route } from "react-router-dom";
import NoOfAppointment from "./NoOfAppointment";
import CardSection from "./CardSection";
import MessageFetch from "./MessageFetch";
import Appointments from "./Appointments";
import React from "react";
import NotFoundPage from "../../NotFoundPage";

const Main = () => {
  return (
    <>
      <div className="col-md-9 ms-sm-auto col-lg-10 mt-4 px-md-4">
        <Routes>
          <Route path="dashboard" element={<CardSection />} />
          <Route path="update-appointments" element={<NoOfAppointment />} />
        </Routes>
        <div className="row">
          <Routes>
            <Route path="appointments" element={<Appointments />} />
          </Routes>
        </div>
        <Routes>
          <Route path="messages" element={<MessageFetch />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default Main;
