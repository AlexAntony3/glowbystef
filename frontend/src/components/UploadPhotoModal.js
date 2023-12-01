import React from "react";
import { Button, Modal } from "react-bootstrap";

const UploadPhotoModal = ({ setisOpenUploadModal }) => {

const handleClose = () => setisOpenUploadModal(false)

  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button onClick={handleClose}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UploadPhotoModal;
