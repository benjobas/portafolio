import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiMariadb
} from "react-icons/si";

function Techstack() {
  const techStackData = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiGit />, name: "Git" },
    { icon: <DiJava />, name: "Java" },
    { icon: <SiMariadb />, name: "MariaDB" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackData.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>}
          >
            <span>{tech.icon}</span>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
