import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../assests/img/contact.svg";

export const Contact = () => {
  const formIntialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formIntialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formIntialDetails);
    if (result.code === 200)
      setStatus({ success: true, message: "Message sent successfully" });
    else {
      setStatus({
        sucess: false,
        message: "something went wrong , pleease try again later",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col ms={6}>
            <img src={contact} alt="contact me"></img>
          </Col>
          {/* col that contain form */}
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(event) => {
                      onFormUpdate("firstName", event.target.value);
                    }}
                  ></input>
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(event) => {
                      onFormUpdate("lastName", event.target.value);
                    }}
                  ></input>
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(event) => {
                      onFormUpdate("email", event.target.value);
                    }}
                  ></input>
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Enter Your Phone Number"
                    onChange={(event) => {
                      onFormUpdate("phone", event.target.value);
                    }}
                  ></input>
                </Col>

                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(event) => {
                      onFormUpdate("message", event.target.value);
                    }}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>

                {/* //status */}

                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
