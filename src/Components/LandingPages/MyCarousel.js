import { Col, Container, Nav, Row, Carousel } from "react-bootstrap";
import "../../style/LandingPage.css";
import React from "react";
import gambar1 from "../../Images/LandingPages/jettdark.jpg";
import gambar2 from "../../Images/LandingPages/agent.jpg";
import gambar3 from "../../Images/LandingPages/valorant.jpg";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gambar1}
          height={"675px"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gambar2}
          height={"675px"}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gambar3}
          height={"675px"}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
