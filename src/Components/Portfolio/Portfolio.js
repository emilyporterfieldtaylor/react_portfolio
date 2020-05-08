import React from 'react';
import './style.css';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col m={6}>
          <div>
            <Card>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
              </CardBody>
              <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </div>
          </Col>
          <Col m={6}>
          <div>
            <Card>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
              </CardBody>
              <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </div>
          </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;