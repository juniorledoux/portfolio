import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DesignCard from "./DesignCards";
import Particle from "../Particle";
import portfolio from "../../Assets/monLogo.png";
import ProjectCard from "../Projects/ProjectCards";
import concour from "../../Assets/design/concour.png";
import excelence from "../../Assets/design/excelence.png";
import festival from "../../Assets/design/festival.png";
import invitation from "../../Assets/design/invitation.png";
import rencontre from "../../Assets/design/rencontre.png";

function Design() {
  return (
    <Container fluid className="project-section bg-nice">
      <Particle />
      <Container style={{ padding: "0px", margin: "0px" }}>
        <h1 className="project-heading">
          My Recent <strong className="purple">Designs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few designs I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "0px" }}>
          <Col
            md={12}
            className="project-card d-flex flex-wrap h-auto"
            style={{ justifyContent: "space-evenly", alignItems: "center" }}
          >
            <DesignCard imgPath={excelence} />
            <DesignCard imgPath={rencontre} />
            <DesignCard imgPath={festival} />
            <DesignCard imgPath={concour} />
            <DesignCard imgPath={invitation} />
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            padding: "0px",
            margin: "0px",
            paddingBottom: "10px",
            alignItems: "center",
          }}
        >
          <Col md={6} className="" style={{ padding: "0px", margin: "0px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href="mailto:juni.ledoux17@gmail.com?subject=Demander un dévis&body=Salut, je m'appelle "
                class="cta"
              >
                SOME PROJECT ? CONTACT ME !
              </a>
            </div>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="MY-PORTFOLIO"
              description=""
              ghLink="https://github.com/juniorledoux/portfolio"
              demoLink="https://juniorledoux.github.io/portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Design;
