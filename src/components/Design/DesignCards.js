import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view h-auto" style={{width:"350px",marginBottom: "20px", height:"auto"}}>
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        width={"auto"}
        height={"auto"}
      />
    </Card>
  );
}
export default ProjectCards;
