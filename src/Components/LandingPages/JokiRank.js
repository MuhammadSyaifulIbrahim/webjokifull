import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../style/LandingPage.css";
import gambar1 from "../../Images/LandingPages/jettdark.jpg";
import { Link } from "react-router-dom";

const JokiRank = () => {
  const handleCardClick = () => {
    alert("Silahkan Login Terlebih Dahulu");
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
                <Link to={"/login"}>
                  <img className="card-img-top" src={gambar1} alt="Gambar 1" />
                </Link>
                <div className="card-body">
                  <Link to={"/login"}>
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
