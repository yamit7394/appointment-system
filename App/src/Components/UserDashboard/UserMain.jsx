import {Routes, Route} from 'react-router-dom';
import TodaysAppointments from "./Appointments";
import React from "react";
import NotFoundPage from '../../NotFoundPage';
import BookAppointment from './BookAppointment';

const UserMain = () => {
  return (
    <>
      <Routes>
        <Route exact path="appointments" element={TodaysAppointments} />
        <Route exact path="my-profile" element={TodaysAppointments} />
      </Routes>

      <div className="col-md-9 ms-sm-auto col-lg-10 mt-4 px-md-4">
        <div className="row">
            <Routes>
                <Route exact path="appointments" element={
                <>
                 <TodaysAppointments/>
                </>
                } />
                <Route path='book-appointment' element={<BookAppointment />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
      </div>
    </>
  );
};

export default UserMain;
