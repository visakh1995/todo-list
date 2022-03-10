import React, { useEffect } from "react";

function Alert({ type, msg, removeAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
  },[]);
  return (
    <div className="alert-message">
      <p style={{ "text-align": "center" }}>{msg}</p>
    </div>
  );
}

export default Alert;
