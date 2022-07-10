import React from "react";

const TotalAppointmentsCard = () => {
  return (
    <div className="card l-bg-cherry mx-2 shadow">
      <div className="card-statistic-3 p-4">
        <div className="card-icon card-icon-large">
          <i class="bi bi-calendar2-check"></i>
        </div>
        <div className="mb-4">
          <h5 class="card-title mb-0">Total Appointments</h5>
        </div>
        <div className="row align-items-center mb-2 d-flex">
          <div className="col-8">
            <h2 className="d-flex align-items-center mb-0">250</h2>
          </div>
        </div>
        <div className="progress mt-1 " dataHeight="8" style={{height: 8+"px"}}>
          <div
            className="progress-bar l-bg-green"
            role="progressbar"
            dataWidth="25%"
            ariaValuenow="25"
            ariaValuemin="0"
            ariaValuemax="100"
            style={{ width: 25 + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TotalAppointmentsCard;
