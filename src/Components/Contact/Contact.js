import React from 'react';
import "./style.css";
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Contact() {
  return (
    <Container>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleText">Name</Label>
              <Input type="text" name="name" id="exampleName" placeholder="John Smith" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="example@email.com" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="exampleText">Message</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={()=>{ alert('This functionality is under construction'); }}>Submit</Button>
      </Form>
    </Container>
  );
}

export default Contact;