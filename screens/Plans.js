import React from "react";
import "./Plans.css";

function Plans({ title }) {
  return (
    <div>
      <div className="plansInfo1">
        <h5>{title}</h5>
        <button
          className="btn"
          onClick={() =>
            alert("Payment Link Has Been Sent To Your registered E-mail")
          }
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Plans;
