import { Col, Container, Nav, Row, Card } from "react-bootstrap";
import React from "react";
import "../../style/LandingPageUser.css";
import gambar1 from "../../Images/LandingPageUser/jettdark.jpg";
import { Link } from "react-router-dom";

const JokiRank = () => {
  const handleCardClick = () => {
    alert("Silahkan Buat Pesanan Anda!");
  };
  return (
    <div className="health-container">
      <Container className="Joki">
        <div className="title4">JOKI RANK VALORANT</div>
        <Row className="health-row">
          <Col>
            <div className="column-content">
              <div
                className="card"
                style={{ width: "18rem", cursor: "pointer" }}
                onClick={handleCardClick}
              >
                <Link to={"/jokivalorant"}>
                  <img className="card-img-top" src={gambar1} alt="Gambar 1" />
                </Link>
                <div className="card-body">
                  <Link to={"/jokivalorant"}>
                    <p className="card-text">JOKI RANK</p>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default JokiRank;
