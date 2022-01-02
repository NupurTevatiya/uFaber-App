import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import People from "../../images/image-people.png";
import Image from "react-bootstrap/Image";

function UPSCPage() {
  const [validated, setValidated] = useState("");
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      {
        <Container fluid="md" className="upsc-form">
          <Row>
            <Col md={8} sm={12}>
              <div>
                <div className="upsc">
                  <p>
                    <strong>UPSC</strong> PATHSHALA
                  </p>
                  <div className="upsc-1">
                    <p>
                      <strong>
                        Best Online Coaching
                        <br></br>for UPSC Preparation{" "}
                      </strong>
                    </p>
                  </div>
                </div>

                <div className="cont">
                  <div className="cont-1">
                    <Image
                      fluid
                      src={People}
                      alt="This is an image of people"
                    />
                  </div>

                  <div className="content">
                    Thousands of students from all over India
                    <br></br>
                    trust UPSC Pathshala for IAS Preparation.
                    <br></br>
                    Now, it's <strong>your</strong> chance to clear UPSC!
                  </div>
                </div>
              </div>
            </Col>

            <Col md={4} sm={12}>
              <Card>
                <Card.Body>
                  <div>
                    <div className="free-demo">
                      <strong>Book a Free Demo Class</strong>
                    </div>
                    <p id="free-demo1">
                      <strong>Limited Seats Only!</strong>
                    </p>

                    <Form validated={validated} onSubmit={handleSubmit}>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Mobile Number "
                        className="mb-3"
                      >
                        <Form.Control
                          required
                          type="number"
                          placeholder="Enter Your Mobile Number"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid mobile number.
                        </Form.Control.Feedback>
                      </FloatingLabel>

                      <FloatingLabel
                        controlId="floatingInput"
                        label="Full Name "
                        className="mb-3"
                      >
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Your Full Name"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a full name.
                        </Form.Control.Feedback>
                      </FloatingLabel>

                      <FloatingLabel
                        controlId="floatingInput"
                        label="E-mail ID "
                        className="mb-3"
                      >
                        <Form.Control
                          required
                          type="email"
                          placeholder="Enter Your E-mail ID"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid state.
                        </Form.Control.Feedback>
                      </FloatingLabel>

                      <p id="describe">What describes you best?</p>

                      <Form.Select className="mb-4" aria-label="description">
                        <option>Select Option</option>
                        <option className="item" value="1">
                          College Student
                        </option>
                        <option className="item" value="2">
                          Work Professional
                        </option>
                        <option value="3">Full time aspirant</option>
                        <option value="3">Other</option>
                      </Form.Select>

                      <Button id="btn" type="submit">
                        Submit
                      </Button>
                      <div className="bottom">
                        <p>
                          By clicking 'Submit' button, you explicitly solicts a
                          call &<br></br>
                          from uFaber
                        </p>
                      </div>
                    </Form>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      }
    </>
  );
}

export default UPSCPage;
