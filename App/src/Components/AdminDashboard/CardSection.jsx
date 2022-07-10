import React from "react";
import MessagesCard from "./cards/MessagesCard";
import TodayAppointmentsCard from "./cards/TodayAppointmentsCard";
import TotalAppointmentsCard from "./cards/TotalAppointmentsCard";
import UsersCard from "./cards/UsersCard";
const CardSection = () => {
  return (
    <div className="row mt-3">
      <div className="col">
        <TodayAppointmentsCard />
      </div>
      <div className="col">
        <TotalAppointmentsCard />
      </div>
      <div className="col">
        <UsersCard />
      </div>
      <div className="col">
        <MessagesCard />
      </div>
    </div>
  );
};

export default CardSection;
