import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import starky from "../../Assets/Projects/starky.png";
import westcole from "../../Assets/Projects/westcole.png";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import ena from "../../Assets/Projects/ena.png";
import efarmer from "../../Assets/Projects/efarmer.png";
import marketplace from "../../Assets/Projects/marketplace.png";
import whatsapp from "../../Assets/Projects/whatsapp.jpg";
import kiwandasell from "../../Assets/Projects/kiwandasell.png";
import login from "../../Assets/Projects/login.png";
import photoretouch from "../../Assets/Projects/photoretouch.png";
import utopia from "../../Assets/Projects/utopia.png";
import vetclinic from "../../Assets/Projects/vetclinic.jpeg";
import portfolio from "../../Assets/monLogo.png";
import istec from "../../Assets/Projects/istec.png";

function Projects() {
  return (
    <Container fluid className="project-section bg-nice">
      <Particle />
      <Container style={{ padding: "0px", margin: "0px" }}>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={utopia}
              isBlog={true}
              title="UTOPIA-INSTITUT"
              description="Management platform for the different administrative departments of an institute or higher education establishment."
              ghLink="https://github.com/juniorledoux/Institut"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vetclinic}
              isBlog={true}
              title="VETCLINIC"
              description="Medication inventory and customer management platform at vetclinic."
              ghLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="LOGIN-PAGE"
              description="HTML5/CSS3 responsive login pages."
              ghLink="https://github.com/juniorledoux/login-page"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kiwandasell}
              isBlog={false}
              title="KIWANDA-SELL"
              description="Simple application to manage sales inputs and outputs."
              ghLink="https://github.com/juniorledoux/kiwanda-sell"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatsapp}
              isBlog={false}
              title="SEND-MSG1"
              description="NodeJs application to test and implement sending messages to customers through Whatsapp business for marketing service."
              ghLink="https://github.com/juniorledoux/SendMsg1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photoretouch}
              isBlog={false}
              title="PHOTO-EDIT"
              description="Simple mobile app for editing photos."
              ghLink="https://github.com/juniorledoux/photo-retouch"
            />
          </Col>
        </Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="mailto:juni.ledoux17@gmail.com?subject=Demander un dévis&body=Salut, je m'appelle "
            class="cta"
          >
            SOME PROJECT ? CONTACT ME !
          </a>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={istec}
              isBlog={false}
              title="ISTEC-EDUCATION"
              description="Online registration management platform for students of the higher institute of economic and accounting techniques."
              ghLink="https://github.com/ISTEC-DEV-TEAM/web-istec"
              demoLink="https://istec-education.com
              "
            />
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="mailto:juni.ledoux17@gmail.com?subject=Demander un dévis&body=Salut, je m'appelle "
            class="cta"
          >
            SOME PROJECT ? CONTACT ME !
          </a>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketplace}
              isBlog={false}
              title="MARKET-PLACE"
              description="Online marketplace to facilitate the delivery of products from local farmers to customer levels."
              ghLink="https://github.com/juniorledoux/market-place"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={efarmer}
              isBlog={false}
              title="E-FARMER"
              description="Web application allowing an investor to get started in chicken farming and know its profitability by taking into account the different parameters of the creation of the chick wave from sales management to inventory management."
              ghLink="https://github.com/juniorledoux/efarmer"
              demoLink="https://sfarmers.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ena}
              isBlog={false}
              title="ENA SERVICE-GROUP"
              description="Showcase website to present the products and service offers of the company ena service groups SARL."
              ghLink="https://github.com/juniorledoux/enaServicesGroup"
              demoLink="https://enaservices-group.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="MERN E-Commerce"
              description="An E-commerce web application developed in MongoDB, ExpressJs, ReactJs and NodeJs."
              ghLink="https://github.com/juniorledoux/Ecommerce-nodejs-mongo-react"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={westcole}
              isBlog={false}
              title="WEST COLLE"
              description="An E-commerce website for managing the products, orders, and customers of the West Colle Cement company."
              ghLink="https://github.com/juniorledoux/Ecommerce-laravel-vuejs"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starky}
              isBlog={false}
              title="Starky"
              description="Progressive web application (cross-platform) for managing human resources for a company."
              ghLink="https://github.com/juniorledoux/MyApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
