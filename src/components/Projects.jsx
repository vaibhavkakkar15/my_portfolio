import React from "react";
import { Container, Nav, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import{Link} from "./Link"
import projt1 from "../assests/img/proj1.png";
import projt2 from "../assests/img/proj2.png";
import projt3 from "../assests/img/proj3.png";
import projt4 from "../assests/img/proj4.png";
import projt5 from "../assests/img/proj5.png";
import projt6 from "../assests/img/proj6.png";
// import colorSharp2 from "../assests/img/projectBack.png";

export const Projects = () => {
  const projects = [
    {
      title: "React Keeper App",
      description:
        "This project is a Keeper app built using ReactJS . The app can be useful to keep a track of your day-to-day works to do. Notes can be created and deleted.It uses React Hooks, state, props, and array mapping to allow for the creation and deletion of notes.",
      projectLink: "https://stunning-tanuki-7e8e06.netlify.app/",
      imgUrl: projt1,
    },
    {
      title: "My Personal Portfolio ",
      description:
        "I made this Portfolio using React Js Bootstrap Custom Css having interative user experience with alot of functionality like Skills slider , My Projects , Contact Form , Newsletter Subscribe , Animations using React Js ",
      projectLink: "https://developervaibhav.live",
      imgUrl: projt2,
    },
    {
      title: "Snake Game",
      description:
        "The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food, trying to avoid hitting its own tail or the edges of the playing area.Each time the snake eats a piece of food, its tail grows longer, making the game increasingly difficult.",
      projectLink: "https://snake-game-8e3.pages.dev/",
      imgUrl: projt3,
    },
    {
      title: "To-Do-List",
      description:
        "This to-do-list is developed using Html , css, javascript having feature to add your daily tasks and having up down buttons that will help you to arrange important tasks in top of list.",
      projectLink: "https://note-taking-app.pages.dev/",
      imgUrl: projt6,
    },
    {
      title: "Drum Kit Set",
      description:
        "The main concepts presented in the project are DOM, key events and event listeners to buttons and keystrokes so that you’ll know when the user is tapping on the keyboard or clicking on a particular button on your Website and you can respond to it.",
      projectLink: "https://drum-kit-set.pages.dev/",
      imgUrl: projt4,
    },
    {
      title: "Responsive Bootstrap Website",
      description:
        "This is full responsive website having different animations using bootstarp classes and custom css propertiesm and third party CDN's",
      projectLink: "https://bootstrap-responsive-website.pages.dev/",
      imgUrl: projt5,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>My Projects</h2>
            <p>
              Here are the few projects that I made during my development
              journey⏳ .
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Links</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((eachProject, index) => {
                      return <ProjectCard key={index} {...eachProject} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <h1 className="tab2">Links For All Projects</h1>
                    {projects.map((eachProject,index)=>{
                      return <Link key={index} {...eachProject}/>
                    })}
                  </Row>
                  

                </Tab.Pane>
                <Tab.Pane eventKey="third">Lorem, ipsum.</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
        {/* <img className="background-img-right" src={colorSharp2}></img> */}
      </Container>
    </section>
  );
};
