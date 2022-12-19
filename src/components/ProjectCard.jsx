import { Col } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const ProjectCard = ({ title, description, imgUrl, projectLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="projectsimg"></img>
        <div className="proj-txts">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
