import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const NavBar = () => {
  //using state hook to hold information of link intially at home
  const { activeLink, setActiveLink } = useState("home");
  //as we scrolling color changes
  const { scrolled, seeScrolled } = useState(false);

  //using use effect
  useEffect(() => {
    const onScroll = () => {
      //if scrolled vertically greater than 50 see scroll true
      if (window.scrollY > 50) {
        seeScrolled(true);
      } else seeScrolled(false);
    };
    window.addEventListener("scroll", onScroll);

    //we have to remove it when your component get removed from dom
    return () => window.removeEventListener("scroll", onScroll);
  });

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={} alt="Logo''"></img> */} PORTFOLIO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <span className="navbar-toggler-icon"></span> */}

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("skills");
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("projects");
              }}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            {/* social icons */}
            <div className="social-icon">
              {/* linked in */}
              <a href="https://www.linkedin.com/in/vaibhav-kakkar-968b531b6/">
                <LinkedInIcon fontSize="small" />
              </a>

              {/* github */}

              <a href="https://github.com/vaibhavkakkar15">
                <GitHubIcon fontSize="small" />
              </a>
              {/* instagram */}

              <a href="#home">
                <InstagramIcon fontSize="small" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => {
                console.log("connect");
              }}
            >
              <span>
                Contact Me <PermContactCalendarIcon />{" "}
              </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
