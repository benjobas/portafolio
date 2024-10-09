import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, yo Soy <span className="purple">Benjamín Sánchez </span>
            desde <span className="purple"> Santiago, Chile</span>
            <br />
            Actualmente me encuentro en búsqueda de empleo como desarrollador de software.
            <br />
            Me encuentro día a día aprendiendo nuevas tecnologías y mejorando mis habilidades en programación.
            <br />
            Me encanta participar en desafíos, hackatones y proyectos de código abierto.
            <br />
            Aparte del código otras actividades que me gustan:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Videojuegos (League of Legends)
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer
            </li>
            <li className="about-activity">
              <ImPointRight /> Natación
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
