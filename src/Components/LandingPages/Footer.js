import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="column-footer">
            <div className="title17">Aku Ingin:</div>
            <li>
              <Link to={"/register"}>
                <button className="button6">Buat akun</button>
              </Link>
            </li>
            <li>
              <Link to={"/login"}>
                <button className="button6">Masuk akun</button>
              </Link>
            </li>
          </Col>
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
