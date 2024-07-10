import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

const OrderForm = ({
  invoiceCode,
  handleClose,
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
  whatsapp,
  setWhatsapp,
}) => {
  return (
    <Modal show onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Order Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="invoiceCode">
            <Form.Label style={{ color: "black" }}>Invoice Code</Form.Label>
            <Form.Control type="text" value={invoiceCode} readOnly />
          </Form.Group>
          <Form.Group controlId="username">
            <Form.Label style={{ color: "black" }}>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label style={{ color: "black" }}>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="whatsapp">
            <Form.Label style={{ color: "black" }}>No. WhatsApp</Form.Label>
            <Form.Control
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OrderForm;
