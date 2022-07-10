import React from "react";
import { useState, useEffect } from "react";
import Messages from "./Messages";
import Cookies from "js-cookie";

const INITIAL_MESSAGE = [];

const MessageFetch = () => {
  const [message, setMessage] = useState(INITIAL_MESSAGE);
  const reRender = (id) => {
    const filteredPeople = message.filter((item) => {
      return item._id !== id;
    });
    setMessage(filteredPeople);
  };

  useEffect(() => {
    const auth_token = Cookies.get("ADMIN_APP_ID");
    fetch("/admin/enquiry", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth_token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res);
      });
  }, []);

  const props = [message, reRender];
  return (
    <>
      <Messages messages={props} />
    </>
  );
};

export default MessageFetch;
