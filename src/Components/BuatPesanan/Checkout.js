import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Container, Card } from "react-bootstrap";
import OrderForm from "./OrderForm";
import OrderDetails from "./OrderDetails";

// Data harga yang digunakan
const priceData = {
  ranks: {
    "Iron 1": {
      "Iron 2": 35000,
      "Iron 3": 65000,
      "Bronze 1": 95000,
      "Bronze 2": 125000,
      "Bronze 3": 155000,
      "Silver 1": 185000,
      "Silver 2": 215000,
      "Silver 3": 245000,
      "Gold 1": 285000,
      "Gold 2": 325000,
      "Gold 3": 365000,
      "Platinum 1": 415000,
      "Platinum 2": 465000,
      "Platinum 3": 515000,
    },
    "Iron 2": {
      "Iron 3": 35000,
      "Bronze 1": 65000,
      "Bronze 2": 95000,
      "Bronze 3": 125000,
      "Silver 1": 155000,
      "Silver 2": 185000,
      "Silver 3": 215000,
      "Gold 1": 255000,
      "Gold 2": 315000,
      "Gold 3": 365000,
      "Platinum 1": 415000,
      "Platinum 2": 465000,
      "Platinum 3": 515000,
    },
    "Iron 3": {
      "Bronze 1": 35000,
      "Bronze 2": 65000,
      "Bronze 3": 95000,
      "Silver 1": 125000,
      "Silver 2": 155000,
      "Silver 3": 185000,
      "Gold 1": 225000,
      "Gold 2": 265000,
      "Gold 3": 315000,
      "Platinum 1": 355000,
      "Platinum 2": 415000,
      "Platinum 3": 455000,
    },
    "Bronze 1": {
      "Bronze 2": 35000,
      "Bronze 3": 65000,
      "Silver 1": 95000,
      "Silver 2": 125000,
      "Silver 3": 155000,
      "Gold 1": 195000,
      "Gold 2": 235000,
      "Gold 3": 275000,
      "Platinum 1": 325000,
      "Platinum 2": 375000,
      "Platinum 3": 425000,
    },
    "Bronze 2": {
      "Bronze 3": 35000,
      "Silver 1": 65000,
      "Silver 2": 95000,
      "Silver 3": 125000,
      "Gold 1": 165000,
      "Gold 2": 205000,
      "Gold 3": 245000,
      "Platinum 1": 295000,
      "Platinum 2": 345000,
      "Platinum 3": 395000,
    },
    "Bronze 3": {
      "Silver 1": 35000,
      "Silver 2": 65000,
      "Silver 3": 95000,
      "Gold 1": 135000,
      "Gold 2": 175000,
      "Gold 3": 215000,
      "Platinum 1": 265000,
      "Platinum 2": 315000,
      "Platinum 3": 365000,
    },
    "Silver 1": {
      "Silver 2": 35000,
      "Silver 3": 65000,
      "Gold 1": 105000,
      "Gold 2": 145000,
      "Gold 3": 185000,
      "Platinum 1": 235000,
      "Platinum 2": 285000,
      "Platinum 3": 335000,
    },
    "Silver 2": {
      "Silver 3": 35000,
      "Gold 1": 75000,
      "Gold 2": 115000,
      "Gold 3": 155000,
      "Platinum 1": 195000,
      "Platinum 2": 245000,
      "Platinum 3": 295000,
    },
    "Silver 3": {
      "Gold 1": 40000,
      "Gold 2": 80000,
      "Gold 3": 120000,
      "Platinum 1": 170000,
      "Platinum 2": 220000,
      "Platinum 3": 270000,
    },
    "Gold 1": {
      "Gold 2": 40000,
      "Gold 3": 80000,
      "Platinum 1": 130000,
      "Platinum 2": 180000,
      "Platinum 3": 230000,
    },
    "Gold 2": {
      "Gold 3": 40000,
      "Platinum 1": 90000,
      "Platinum 2": 140000,
      "Platinum 3": 190000,
    },
    "Gold 3": {
      "Platinum 1": 50000,
      "Platinum 2": 100000,
      "Platinum 3": 150000,
    },
    "Platinum 1": {
      "Platinum 2": 50000,
      "Platinum 3": 100000,
    },
    "Platinum 2": {
      "Platinum 3": 50000,
    },
  },
  servers: {
    Asia: 0,
  },
  paymentMethods: {
    QRIS: 0,
  },
  processTimes: {
    Normal: 0,
    Cepat: 30000,
    Kilat: 60000,
  },
};

const Checkout = () => {
  const [rankAwal, setRankAwal] = useState("");
  const [rankTujuan, setRankTujuan] = useState("");
  const [server, setServer] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [processTime, setProcessTime] = useState("");
  const [subtotal, setSubtotal] = useState(null);
  const [invoiceCode, setInvoiceCode] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});

  // State for OrderForm inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    const calculateSubtotal = () => {
      let price = 0;

      if (rankAwal && rankTujuan) {
        price += priceData.ranks[rankAwal]?.[rankTujuan] || 0;
      }

      if (server) {
        price += priceData.servers[server] || 0;
      }

      if (paymentMethod) {
        price += priceData.paymentMethods[paymentMethod] || 0;
      }

      if (processTime) {
        price += priceData.processTimes[processTime] || 0;
      }

      setSubtotal(price);
    };

    calculateSubtotal();
  }, [rankAwal, rankTujuan, server, paymentMethod, processTime]);

  const handleCheckout = () => {
    // Generate the invoice code
    const newInvoiceCode = `INV-${Date.now()}`;
    setInvoiceCode(newInvoiceCode);
    setShowOrderForm(true); // Show the OrderForm modal
  };

  const handleCloseOrderForm = () => {
    setShowOrderForm(false); // Close the OrderForm modal
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // Save the order details
    const order = {
      invoiceCode,
      username,
      password,
      whatsapp,
      harga: subtotal?.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      }),
      paymentMethod: "QRIS (DANA, OVO, GOPAY, SHOPEEPAY)",
    };
    setOrderDetails(order);
    setShowOrderForm(false); // Close the modal after submission
    setShowOrderDetails(true); // Show the OrderDetails
    alert("Order has been submitted!");
  };

  return (
    <div className="buat-pesanan">
      <Container className="mt-4">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">BUAT ORDERAN</Card.Title>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="rankAwal">
                    <Form.Label className="pesanan">Pilih Rank Awal</Form.Label>
                    <Form.Control
                      as="select"
                      value={rankAwal}
                      onChange={(e) => {
                        setRankAwal(e.target.value);
                        setRankTujuan("");
                      }}
                    >
                      <option value="">Pilih Rank Awal</option>
                      {Object.keys(priceData.ranks).map((rank) => (
                        <option key={rank} value={rank}>
                          {rank}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="rankTujuan">
                    <Form.Label className="pesanan">
                      Pilih Rank Tujuan
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value={rankTujuan}
                      onChange={(e) => setRankTujuan(e.target.value)}
                      disabled={!rankAwal}
                    >
                      <option value="">Pilih Rank Tujuan</option>
                      {rankAwal &&
                        Object.keys(priceData.ranks[rankAwal] || {}).map(
                          (rank) => (
                            <option key={rank} value={rank}>
                              {rank}
                            </option>
                          )
                        )}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="server">
                    <Form.Label className="pesanan">Pilih Server</Form.Label>
                    <Form.Control
                      as="select"
                      value={server}
                      onChange={(e) => setServer(e.target.value)}
                    >
                      <option value="">Pilih Server</option>
                      {Object.keys(priceData.servers).map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="paymentMethod">
                    <Form.Label className="pesanan">
                      Metode Pembayaran
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <option value="">Pilih Metode Pembayaran</option>
                      {Object.keys(priceData.paymentMethods).map((method) => (
                        <option key={method} value={method}>
                          {method}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="processTime">
                    <Form.Label className="pesanan">
                      Pilih Waktu Proses
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value={processTime}
                      onChange={(e) => setProcessTime(e.target.value)}
                    >
                      <option value="">Pilih Waktu Proses</option>
                      {Object.keys(priceData.processTimes).map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="subtotal">
                    <Form.Label className="pesanan">Subtotal</Form.Label>
                    <Form.Control
                      type="text"
                      readOnly
                      value={
                        subtotal
                          ? subtotal.toLocaleString("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            })
                          : "Rp 0"
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button
                variant="primary"
                className="w-100"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>

      {/* OrderForm modal */}
      {showOrderForm && (
        <OrderForm
          invoiceCode={invoiceCode}
          handleClose={handleCloseOrderForm}
          handleSubmit={handleSubmitOrder}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          whatsapp={whatsapp}
          setWhatsapp={setWhatsapp}
        />
      )}

      {/* OrderDetails modal */}
      {showOrderDetails && <OrderDetails order={orderDetails} />}
    </div>
  );
};

export default Checkout;
