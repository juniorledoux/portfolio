import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name">Junior Ledoux WATAT</strong>
              </h1>

              <div style={{ padding: 45, textAlign: "left" }}>
                <Type />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a
                  href="mailto:juni.ledoux17@gmail.com?subject=Demander un dévis&body=Salut, je m'appelle "
                  class="cta"
                >
                  SOME PROJECT ? CONTACT ME !
                </a>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
