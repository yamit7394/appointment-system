import React from "react";

const NotFoundPage = () => {

  return (
    <div className="text-center mt-5">
      <h1 className="text-warning fs-1">404</h1>
      <h2>Page you are looking for does not exist</h2>
      <a href="/" className="btn btn-warning mt-3">Back To Homepage</a>
    </div>
  );
};

export default NotFoundPage;