import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaMailBulk } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ME <span className="purple"> PRESENTO  </span>
            </h1>
            <p className="home-about-body">
              Me encanta la programación, y me esfuerzo día a día por desarrollar mejores programas
              <br />
              <br />Mis lenguajes preferidos son 
              <i>
                <b className="purple"> Javascript y Java. </b>
              </i>
              <br />
              <br />
              Mi campo de interés es construir nuevos &nbsp;
              <i>
                <b className="purple">Productos Web  </b> y también
                en áreas relacionadas con{" "}
                <b className="purple">
                  Videojuegos.  
                </b>
              </i>
              <br />
              <br />
              Siempre que puedo, también aplico mi pasión por desarrollar productos <b className="purple">Node.js</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>MIS REDES</h1>
            <p>
              Siéntete libre de <span className="purple">contactarte </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/benjobas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/benjobas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
  <a
    href="mailto:benjobas@gmail.com"
    className="icon-colour home-social-icons"
  >
    <FaMailBulk />
  </a>
</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
