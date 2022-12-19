import React from "react";
//to detect when to have typing animations
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import myPic from "../assests/img/my pic.jpg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [
    "Web Developer",
    "Programmer",
    "Web Designer",
    "Team Worker",
  ];
  const period = 2000;
  //portion of work being display

  useEffect(() => {
    let changer = setInterval(() => {
      change();
    }, delta);

    return () => {
      clearInterval(changer);
    };
  }, [text]);

  const change = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Vaibhav Kakkar `}
              <span className="wrap">{text} </span>
            </h1>
            <p>
              I currently in 3rd year of my Bachelor of computer science and
              engineering seeking an internship opportunity for an SDE role. I
              am a good learner, a tech enthusiast, team worker interested in
              web development.Currently, I am also working on Backend
              development.
            </p>
            <button
              onClick={() => {
                console.log("connect");
              }}
            >
              <a href="https://drive.google.com/file/d/1-FNlgX2BIkAiiEzIQQPHXq4vgm3ZMHou/view">Download Resume</a>
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={myPic} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
