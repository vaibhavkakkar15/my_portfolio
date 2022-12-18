import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />

          {/* <Col size={12} sm={6} className="text-center text-sm-end"> */}
            <div className="social-icon" id="footer-icon">
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
            <p>Copyright 2022. All Rights Reserved</p>
          {/* </Col> */}
        </Row>
      </Container>
    </footer>
  );
};
