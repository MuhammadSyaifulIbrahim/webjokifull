import React, { useState } from "react";
import "../../style/CekPesanan.css";
import images2 from "../../Images/CekPesanan/logo.png";

const CekPesanan = () => {
  const [invoice, setInvoice] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const checkOrderStatus = (invoice) => {
    // Simulate checking order status
    // In a real app, this would be an API call
    if (invoice === "12345") {
      return "done";
    } else {
      return "in progress";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const status = checkOrderStatus(invoice);
    if (status === "done") {
      setStatusMessage("Order is done");
    } else {
      setStatusMessage("Order is in progress");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <img width="50px" src={images2} alt="Logo" />
        <h1>Cek Status Pesanan</h1>
        <div className="input-box">
          <p>No. Transaksi</p>
          <input
            type="text"
            placeholder="Masukkan no.transaksi"
            value={invoice}
            onChange={(e) => setInvoice(e.target.value)}
            required
          />
        </div>
        <div className="button-submit">
          <button type="submit">Cek Pesanan</button>
        </div>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default CekPesanan;
