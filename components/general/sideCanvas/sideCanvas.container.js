"use client";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import styles from "./SideCanvas.module.css";
import { FaSlidersH } from "react-icons/fa";

const SideCanvas = ({ name, children, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.sideCanvas}>
      <Button
        className={`${styles.openFilterBtn} d-flex align-items-center`}
        onClick={handleShow}
      >
        <i className={`${styles.FilterIcon} d-flex`}>
          <FaSlidersH />
        </i>
        {name}
      </Button>
      <Offcanvas
        dir={"ltr"}
        className={styles.sideOffcanvas}
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body className="px-4">{children}</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SideCanvas;
