import React, { useContext } from "react";
import { Alert } from "reactstrap";
import AlertContext from "../context/alert/AlertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <Alert color="success">
        <i className="fas fa-info-circle"></i>
      </Alert>
    )
  );
};

export default Alert;
