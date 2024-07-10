import { Col, Container, Nav, Row } from "react-bootstrap";
import "../../style/LandingPageUser.css";
import gambar1 from "../images/logo.png";
import gambar2 from "../images/logo.png";
import image3 from "../images/logo.png";
import gambar4 from "../images/logo.png";

const Fitur = () => {
  return (
    <div>
      <Container className="fitur-container">
        <div className="title9">Rekomendasi Nutrisi Kamu</div>
        <div className="title10">
          Temukan menu makanan sehat dan rahasia nutrisinya. Pesan hidangan
          favoritmu dalam sekejap.
        </div>
        <Row className="health-row">
          <Col>
            <div className="column-content1">
              <img width={"100%"} src={gambar1} />
              <div className="title7">Rencanakan Latihan</div>
              <div className="title11">
                Temukan menu makanan sehat dan rahasia nutrisinya. Pesan
                hidangan favoritmu dalam sekejap.
              </div>
              <button className="button1">Mulai</button>
            </div>
          </Col>
          <Col>
            <div className="column-content1">
              <img width={"100%"} src={gambar2} />
              <div className="title7">Bergabunglah Dengan Komunitas</div>
              <div className="title11">
                Dengan pola hidup sehat, Anda dapat merasakan peningkatan
                kesejahteraan emosional dan kebahagiaan dalam kehidupan
                sehari-hari.
              </div>
              <button className="button2">Mulai</button>
            </div>
          </Col>
          <Col>
            <div className="column-content1">
              <img width={"100%"} src={image3} />
              <div className="title7">Pesan Makanan & Booking GYM</div>
              <div className="title11">
                Pola hidup sehat dapat mengurangi risiko berbagai penyakit
                kronis seperti diabetes, kanker, dan penyakit jantung.
              </div>
              <button className="button3">Mulai</button>
            </div>
          </Col>
          <Col>
            <div className="column-content1">
              <img width={"100%"} src={gambar4} />
              <div className="title7">Banyak Waktu Luang</div>
              <div className="title11">
                Dengan pola hidup sehat, Anda dapat merasakan peningkatan
                kesejahteraan emosional dan kebahagiaan dalam kehidupan
                sehari-hari.i
              </div>
              <button className="button4">Mulai</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Fitur;
