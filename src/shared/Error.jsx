import React from "react";
import "./Error.css";

const Error = ({ errorMessage }) => {
  return (
    <section className="text-center">
      <h4>Error</h4>
      <p className="error-text">{errorMessage}</p>
    </section>
  );
};

export default Error;
