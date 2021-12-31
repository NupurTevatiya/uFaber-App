import React,{useState} from 'react';
import { Button, Card, Col, Container, Dropdown, DropdownButton, Form, InputGroup, Row} from 'react-bootstrap';
import './App.css';
import People from './images/image-people.png';
import Image from 'react-bootstrap/Image'

function App() {

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
    <body className="form">
      <Container fluid="md" className="upsc-form">
        <Row className="demo">
        <Col className="c-1" md={8}>
    <div>
        <div className='upsc'>
        <p><strong>UPSC</strong> PATHSHALA</p>
    <div className='upsc-1'>
        <p><strong>Best Online Coaching 
        <br></br>for UPSC Preparation </strong></p>
    </div>
    </div>

    <div className='cont'>
    <div className="lap">
        <Image fluid src= {People} alt="This is an image of people" />
    </div>

    <div className='content'>Thousands of students from all over India
      <br></br>
         trust UPSC Pathshala for IAS Preparation.
      <br></br>
         Now, it's <strong>your</strong> chance to clear UPSC!</div>
    </div>
    </div>
    </Col>

    <Col md={4}>
      <Card>
      <Card.Body>
        <div>
        <div className='free-demo'>
             <strong>Book a Free Demo Class</strong>
        </div> 
             <p id='free-demo1'><strong>Limited Seats Only!</strong></p>

    <Form validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label >Mobile Number</Form.Label>
         <Form.Control type="number" className="form-control mt-n3" required/>
         <Form.Control.Feedback type="invalid">
            Please enter a valid mobile number.
         </Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label >Full Name</Form.Label>
       <Form.Control type="text" placeholder="Enter Full Name " className="form-control mt-n3" required />
       <Form.Control.Feedback type="invalid">
          Please enter a valid name.
       </Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>E-mail ID</Form.Label>
     <Form.Control aria-describedby="inputGroupPrepend" type="email" placeholder="Enter E-mail ID" required/>
     <Form.Control.Feedback type="invalid">
        Please enter a valid e-mail id.
     </Form.Control.Feedback>
    </Form.Group>

   <p id='best'>What describes you best?</p>

    <DropdownButton className="bm-5" title=" Select Options"> 
      <Dropdown.Item id="curtain" href="#/action-1">College Student</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Working Professional</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Full time aspirant</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
    </DropdownButton>

   <br></br>

    <Button id='btn' type="submit">
          Submit
    </Button>

  <br></br>

  <div className='last-line'>
     <p>By clicking 'Submit' button, you explicitly solicts a call &
       <br></br>
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
    </body>
  );
}

export default App;
