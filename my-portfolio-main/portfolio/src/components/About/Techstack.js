import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineHtml5 } from "react-icons/ai";
import {SiCss3 ,SiExpress, SiReact} from "react-icons/si"
import {
  DiJavascript1,
  DiReact,
  DiJava,
  DiMysql,
  DiGit,
  DiPython,
  
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineHtml5 />
        <p style={{fontSize:"20px", marginTop: "10px" }}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p style={{fontSize:"20px", marginTop: "10px" }}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize:"20px", marginTop: "10px" }}>JAVASCRIPT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{fontSize:"20px", marginTop: "10px" }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <p style={{fontSize:"20px", marginTop: "10px" }}>Spring</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{fontSize:"20px", marginTop: "10px" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p style={{fontSize:"20px", marginTop: "10px" }}>MySQL</p>
      </Col> 
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize:"20px", marginTop: "10px" }}>GIT</p>
      </Col>
    </Row>
  );
}

export default Techstack;