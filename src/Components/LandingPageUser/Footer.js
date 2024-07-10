import { Col, Row, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="title18">Kontak Kami:</div>
            <div className="title19">Email:</div>
            <div className="title19">boybloxstore@gmail.com</div>
            <div className="title19">Instagram:</div>
            <div className="title19">@Boyblox_Store</div>
            <div className="title19">Phone:</div>
            <div className="title19">081284831273</div>
          </Col>

          <div className="horizontal-line1"></div>
          <div className="title22">
            2024@ All rights reserved. Sirkel Dosen Team
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
