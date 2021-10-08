import React from "react";
import { Button, Modal } from "react-bootstrap";
import { ALERT_TEXTS } from "../constants/ALERT_TEXTS";

interface VictoryModalProps {
  isVisible: boolean;
  handleClose: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  isVisible,
  handleClose,
}) => {
  return (
    <Modal
      show={isVisible}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{ALERT_TEXTS.VICTORY.header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{ALERT_TEXTS.VICTORY.body}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Victory
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
