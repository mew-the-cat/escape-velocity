import React from "react";
import Alert from "react-bootstrap/Alert";
import { AlertText } from "../models/AlertText";

interface AlertBarProps {
  alertText: AlertText;
  isVisible: boolean;
}

export const AlertBar: React.FC<AlertBarProps> = ({ alertText, isVisible }) => {
  return (
    <span className="alertbar">
      <Alert key="mainAlert" show={isVisible} variant={alertText.variant}>
        <Alert.Heading>{alertText.header}</Alert.Heading>
        {alertText.body}
      </Alert>
    </span>
  );
};
