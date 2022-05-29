import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import fasos from "../../Assets/Projects/fasos.jpeg"
import fresh from "../../Assets/Projects/fresh.jpeg"
import hot from "../../Assets/Projects/hot.jpeg"
import Whea from "../../Assets/Projects/Whea.jpeg"
// import tictactoe from "../../Assets/Projects/TicTacToe.png"
// import PetHouse from "../../Assets/Projects/PetHouse.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={PetHouse}
              isBlog={false}
              title="Boarding house for your pets"
              description="In this website you can find boarding house for your pets. All details of the boarding house are mentioned here. Admin can add , update and delete the information. Login , Sorting and filter functionalities are also there."
              tech="React |  Redux |  NodeJs  |  ExpressJs  |  MongoDB  |  CSS"
              link=""
              linklive="https://bos-first-site-gold.vercel.app/"
            />
          </Col> */}

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={fasos}
              isBlog={false}
              title="Fasos Clone "
              description="Faasos is an Indian food on demand service incorporated in
              2004. It is one of the brands owned by the online restaurant
              company, Rebel Foods"
              tech="NodeJs  |  HTML |  CSS |  JavaScript  |Local Storage"
              link="https://github.com/V-bhoy/Fasoos-Clone"
              // linkmedium="https://h1t3ndr4.medium.com/cloning-of-zara-website-119d7d053880"
              linklive="https://zesty-medovik-ce831a.netlify.app"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={fresh}
              isBlog={false}
              title="Freshly Clone "
              description="Freshly is a New York-based prepared meal delivery company
              that delivers throughout the United States."
              tech="HTML  |  CSS  |  JavaScript"
              link="https://github.com/Shreyansh051/Freshly_Project_clone"
              // linkmedium="https://medium.com/@anshukelodiya/our-project-team-practo-b6109bd14863"
              linklive="https://friendly-wing-3ca4d4.netlify.app/"
            />
          </Col>

           <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={hot}
              isBlog={false}
              title="You Tube Clone"
              description="A simple Debouns logic search movie name."
              tech="HTML  |  JavaScript  |  CSS"
              link="https://github.com/Ravipatel02/HotStar_Debouns"
              linkmedium=""
              linklive="https://objective-austin-0d8acb.netlify.app/"
            />
          </Col>

         <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={Whea}
              isBlog={false}
              title="Weather App"
              description="A simple weather application for users which gives you next 7 days weather information."
              tech="HTML  |  CSS  | JavaScript"
              link="https://github.com/Ravipatel02/Weather_api_use"
              linkmedium=""
              linklive="https://elastic-colden-c6a021.netlify.app/"
            />
          </Col>

          {/* <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic tac Toe Game"
              description="A simple tic-tac-toe game where users can play the game"
              tech="ReactJs  |  CSS"
              link=""
              linkmedium="#"
              linklive=""
            />
          </Col> */}


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;