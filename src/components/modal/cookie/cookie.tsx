import styles from "./cookie.module.scss";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Cookie = (props: any) => {
  const [show, setShow] = useState(false); // Default to false
  const { compData } = props;

  // Check localStorage when the component mounts
  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setShow(true); // Show the popup only if the user hasn't accepted cookies
    }
  }, []);

  const handleClose = () => {
    setShow(false); // Hide the popup
    localStorage.setItem("cookiesAccepted", "true"); // Set the flag in localStorage
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      className={styles.modalWrapper}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={compData?.imageSource} alt="WebCreatix" />
          {compData?.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        dangerouslySetInnerHTML={{
          __html: compData?.description,
        }}
      />
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {compData?.close}
        </Button>
        <Button variant="primary" onClick={handleClose}>
          {compData?.accept}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cookie;