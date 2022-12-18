import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assests/img/skill1.svg";
import skill2 from "../assests/img/skill2.svg";
import skill3 from "../assests/img/skill3.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Hey! Developers😊 I'm Working on various Web Domains like
                HTML,Css,JavaScript, React Js, Node Js , Express Js , MongoDB ,
                Git , Github.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={skill1} alt="image"></img>
                  <h5>JavaScript</h5>
                </div>

                <div className="item">
                  <img src={skill2} alt="image"></img>
                  <h5>React Js</h5>
                </div>

                <div className="item">
                  <img src={skill3} alt="image"></img>
                  <h5>Node JS</h5>
                </div>

                <div className="item">
                  <img src={skill2} alt="image"></img>
                  <h5>Express Js</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
