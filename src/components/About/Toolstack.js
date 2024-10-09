import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiJira,
  SiUbuntu,
} from "react-icons/si";

function Toolstack() {
  const toolStackData = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiJira />, name: "Jira" },
    { icon: <SiUbuntu />, name: "Ubuntu" },
  ]
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStackData.map((tech, index) => (
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

export default Toolstack;
