import React, { useState } from "react";
import { Modal, Card, Button, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import qris from "../../Images/BuatPesanan/qris.png";

function OrderDetails({ order }) {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Handle the file upload here, e.g., send it to the server
      console.log("File to be uploaded: ", file);
      // Reset the file input after submission
      setFile(null);
    } else {
      alert("Please select a file before submitting.");
    }
  };

  return (
    <div className="order-details">
      <Card className="order-info mb-3">
        <Card.Header>DETAIL PESANAN</Card.Header>
        <Card.Body>
          <Table borderless>
            <tbody>
              <tr>
                <td>No Invoice</td>
                <td>{order.invoiceCode}</td>
              </tr>
              <tr>
                <td>Metode Pembayaran</td>
                <td>{order.paymentMethod}</td>
              </tr>
              <tr>
                <td>Harga</td>
                <td style={{ color: "red" }}>{order.harga}</td>
              </tr>
            </tbody>
          </Table>

          <h5>DATA LOGIN</h5>
          <Table borderless>
            <tbody>
              <tr>
                <td>Username</td>
                <td>{order.username}</td>
              </tr>
              <tr>
                <td>Password</td>
                <td>{order.password}</td>
              </tr>
              <tr>
                <td>No. WhatsApp</td>
                <td>{order.whatsapp}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className="order-info">
        <Card.Header>PEMBAYARAN</Card.Header>
        <Card.Body className="text-center">
          <p>Silahkan klik tombol dibawah untuk melakukan pembayaran</p>
          <Button variant="primary" className="w-100 mb-3" onClick={handleShow}>
            BAYAR SEKARANG
          </Button>
          <p className="text-muted">
            Penting!!! Lakukan pembayaran sebelum 1x24 jam, jika tidak melakukan
            pembayaran dari waktu yang ditentukan pesanan akan dianggap hangus.
          </p>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>QRIS Pembayaran</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={qris} alt="QRIS" className="img-fluid" />
          <h3>Upload Proof of Payment (Image only)</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Select Image File:</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrderDetails;
