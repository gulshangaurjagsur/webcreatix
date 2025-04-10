import styles from "./cookie.module.scss";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const Cookie = (props: any) => {
  const [show, setShow] = useState(true);
  const { compData } = props;
  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => setShow(false)}
      className={styles.modalWrapper}>
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={compData?.imageSource}  alt="WebCreatix" />
          {compData?.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{compData?.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">{compData?.close}</Button>
        <Button variant="primary" onClick={() => setShow(false)}>
          {compData?.accept}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Cookie;
