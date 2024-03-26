import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section bg-nice" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              Where professionalism combines with passion, for several years now
              i have been practicing my job with dedication: bringing ideas to
              life ! 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Illustrator, Canva And Photoshop. </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for software
              development with <b className="purple">NodeJS, Laravel</b>,
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React Native, VueJS, Angular</b>
              </i>
              &nbsp; using
              <i>
                <b className="purple"> TypeScript</b> and
              </i>
              <i>
                <b className="purple"> Bootstrap, Tailwind.</b>
              </i>
              <br />
              <br />
              My hobbies are{" "}
              <i>
                <b className="purple">sports, especially basketball, swimming</b>
              </i>{" "}
              and also in areas related to{" "}
              <b className="purple">digital.</b>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={me} className="img-fluid me" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/juniorledoux"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/+237692775509"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/junior-watat-38891b1b8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/juniorledoux/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
