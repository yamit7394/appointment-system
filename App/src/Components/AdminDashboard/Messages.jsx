import React from "react";
import Cookies from "js-cookie";

const Messages = (props) => {
  const completeHandler = async (e) => {
    const auth_token = Cookies.get("ADMIN_APP_ID");
    const res = await fetch("/admin/enquiry/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth_token,
      },
      body: JSON.stringify({
        id: e.target.name,
      }),
    });
    if (res.status === 200) {
      props.messages[1](e.target.name);
    }
  };
  return (
    <>
      {props.messages[0].length === 0 ? (
        <p>No new Messages</p>
      ) : (
        <table class="table table-success table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Message</th>
              <th scope="col">Mobile</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {props.messages[0].map((message, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{message.name}</td>
                <td>{message.message}</td>
                <td>{message.mobile}</td>
                <td>
                  <input
                    type="button"
                    className="btn btn-primary"
                    name={message._id}
                    value="Complete"
                    onClick={completeHandler}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Messages;
