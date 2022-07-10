import React from "react";

const MyProfile = () => {
    return (
        <form className="w-50 m-auto mt-5">
            <div className="form mb-3">
                <input type="text" class="form-control" id="floatingInput"/>
                    <label for="date">Select Date</label>
            </div>
            <div className="form">
                <input type="number" className="form-control" id="no-of-appointments" placeholder="No of Appointments"/>
                    <label for="no-of-appointments">No of Appointments</label>
            </div>
            <button className="btn btn-outline-warning mt-3 w-100">Create Appointment</button>
        </form>
    );
};

export default MyProfile;
