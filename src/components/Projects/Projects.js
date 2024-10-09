import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/Hackaton-Preview.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis nuevos <strong className="purple">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algo de mi trabajo de lo que estoy orgulloso.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Spacelab"
              description="Proyecto realizado en la Hackaton de la NASA, el cual despliega exoplanetas en el cielo nocturno,
              obtiene el mapa de estrellas específicas del exoplaneta, despliega la información mediante cards interactuables con una IA entrenada y permite dibujar tu propia constelación."
              ghLink="https://github.com/benjobas/SpaceAppChallenge/tree/master"
              demoLink="https://drive.google.com/file/d/1pMRQ7A72GyK8aO14KDTy6mKyBvkfBwrE/view"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
