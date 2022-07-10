import React from "react";

const MessagesCard = () => {
  return (
    <div className="card l-bg-green-dark mx-2 shadow">
      <div className="card-statistic-3 p-4">
        <div className="card-icon card-icon-large">
          <i class="bi bi-envelope-plus"></i>
        </div>
        <div className="mb-4">
          <h5 class="card-title mb-0">Messages</h5>
        </div>
        <div className="row align-items-center mb-2 d-flex">
          <div className="col-8">
            <h2 className="d-flex align-items-center mb-0">20</h2>
          </div>
        </div>
        <div className="progress mt-1 " dataHeight="8" style={{height: 8+"px"}}>
          <div
            className="progress-bar l-bg-green"
            role="progressbar"
            dataWidth="35%"
            ariaValuenow="20"
            ariaValuemin="0"
            ariaValuemax="10000"
            style={{ width: 25 + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MessagesCard;
