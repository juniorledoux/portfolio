import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{fontSize:"1.2em"}}>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone ! <br /> I am{" "}
            <span className="purple">Ledoux WATAT </span>
            from <span className="purple"> Douala, Camerounn.</span>
            <br /> I'm in my third year in Software Engineering at ISTEC.
            <br />
            <br />
            Computer scientist in the digital field for several years, I create
            static and dynamic websites, web and mobile applications as well as
            e-coomerce sites. Creativity, quality and serenity, for you, i
            manage everything ! from the design to the realization of your
            projects, visuals and others respecting current standards in terms
            of digital content.
            <br />
            <br />
            Other than that, I have some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball (Regional championship)
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen music and Reading manga/anime
            </li>
            <li className="about-activity">
              <ImPointRight /> swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In a world that changes extremely quickly, the biggest risk would
            be to take none."{" "}
          </p>
          <footer className="blockquote-footer">Mark Zuckerberg</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
