import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../Particle';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


export const Contact = () => {
    return (
        <div>
            <Container fluid className="contact-section">
                <Particle />
                <Container fluid>
             <h1>FIND ME ON</h1>
             <br />
             <div style={{display: 'grid', marginLeft: 'auto', marginRight:'auto', width:'300px', gridTemplateColumns:'30% 30% 30%'}}>
              <div>
              <a href="https://github.com/ravipatel02" target="_blank" style={{textDecoration: 'none', color:'white'}}> <AiFillGithub style={{height: '40px', width: '40px'}} /> </a>
              </div>
              <div></div>
              <div>
                <a href="https://www.linkedin.com/in/ravi0929/" target="_blank" style={{textDecoration: 'none', color:'white'}}><FaLinkedinIn style={{height: '40px', width: '40px'}} /></a>
              </div>
          </div>
          <br/>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            
          
            
            <h3>
              Contact No:
              <p
                href="tel:+918887802799"
                style={{
                  color: "#f0195a",
                }}
              >
                +91-8887802799
              </p>
            </h3>
            
            <h3>
              Email:
              <p
                href="tel:+91-8887802799"
                style={{
                  color: "#f0195a",
                }}
              >
                ravipatel120798@gmail.com
              </p>
            </h3>
            </Container>
            </Container>
        </div>
    )
}
