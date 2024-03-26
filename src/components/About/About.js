import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { ImPointRight } from "react-icons/im";

import me from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section bg-nice">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }} className="">
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Know <strong className="purple">Who I AM</strong>
          </h1>
          <Col md={5} className="myAvtar">
            <Tilt>
              <img src={me} className="img-fluid me" alt="avatar" />
            </Tilt>
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              padding: "0px",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <Aboutcard />
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "start",
            padding: "0px",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Col md={7} style={{ padding: "0px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">My</strong> Services
            </h1>
            <p>Discover a world of possibilities with my services in:</p>
            <Row
              style={{
                justifyContent: "start",
                padding: "0px",
              }}
            >
              <Col md={5} style={{ paddingTop: "0px", paddingBottom: "0px" }}>
                <h1
                  style={{
                    fontSize: "1.2em",
                    paddingBottom: "10px",
                    textDecoration: "underline",
                  }}
                >
                  <strong className="purple">Design</strong>
                </h1>
                <p>
                  <ul>
                    <li className="text-start">
                      <ImPointRight /> Logo and branding design
                    </li>
                    <li className="text-start">
                      <ImPointRight /> Design of advertising posters
                    </li>
                    <li className="text-start">
                      <ImPointRight /> Photo and video editing
                    </li>
                    <li className="text-start">
                      <ImPointRight /> Community management
                    </li>
                  </ul>
                </p>
              </Col>
              <Col md={7} style={{ paddingTop: "0px", paddingBottom: "0px" }}>
                {" "}
                <h1
                  style={{
                    fontSize: "1.2em",
                    paddingBottom: "10px",
                    textDecoration: "underline",
                  }}
                >
                  <strong className="purple">Development</strong>
                </h1>
                <p>
                  <ul>
                    <li className="text-start">
                      <ImPointRight /> Responsive websites
                    </li>
                    <li className="text-start">
                      <ImPointRight /> Web applications
                    </li>
                    <li className="text-start">
                      <ImPointRight /> E-commerce site and others
                    </li>
                    <li className="text-start">
                      <ImPointRight /> Mobile applications
                    </li>
                    <li className="text-start">
                      <ImPointRight /> Hosting and domain name
                    </li>
                  </ul>
                </p>
              </Col>
            </Row>

            <p className="text-start">
              {" "}
              Take the first step towards achieving your digital goals today, we
              are here to help you !
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href="mailto:juni.ledoux17@gmail.com?subject=Demander un dévis&body=Salut, je m'appelle "
                class="cta"
              >
                SOME PROJECT ? CONTACT ME !
              </a>
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "0px", paddingBottom: "0px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Tools<strong className="purple"> I Use</strong>
        </h1>
        <Toolstack />
        <h1 className="project-heading">
          <strong className="purple">Professional </strong>Skillset
        </h1>
        <Techstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
