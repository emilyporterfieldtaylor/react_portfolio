import React from 'react';
import './style.css';
import githubLogo from "../Images/GitHub-Mark-32px.jpg";
import employeeDirectory from "../Images/employeedirectory-2.png"
import burgerImage from "../Images/eat-da-burger-2.png"
import codeQuizImage from "../Images/codequiz-2.png"
import datingImage from "../Images/groupproject-2.png"
import weatherImage from "../Images/weatherdashboard-2.png"
import zelda from "../Images/zelda-2.png"
import {
  Card, CardImg, CardBody, CardLink,
  CardTitle, Container, Row, Col
} from 'reactstrap';

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col m={6}>
        <div>
            <Card>
              <CardBody>
                <CardTitle>
                  React Employee Directory
                </CardTitle>
              </CardBody>
              <CardImg width="100%" src={employeeDirectory} alt="Card image cap" />
              <CardBody>
                <CardLink href="https://github.com/emilyporterfieldtaylor/employee_directory"><img src={githubLogo} alt="github" /></CardLink>
                <a href="https://bigaustin.herokuapp.com/" className={"stretched-link"}></a>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col m={6}>
        <div>
            <Card>
              <CardBody>
                <CardTitle>
                  Zelda's Cut-Throat Kitchen
                </CardTitle>
              </CardBody>
              <CardImg width="100%" src={zelda} alt="Card image cap" />
              <CardBody>
                <CardLink href="https://github.com/emilyporterfieldtaylor/employee_directory"><img src={githubLogo} alt="github" /></CardLink>
                <a href="https://zelda-cut-throat-kitchen.herokuapp.com/" className={"stretched-link"}></a>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <Col m={6}>
        <div>
            <Card>
              <CardBody>
                <CardTitle>
                  Eat-Da-Burger
                </CardTitle>
              </CardBody>
              <CardImg width="100%" src={burgerImage} alt="Card image cap" />
              <CardBody>
                <CardLink href="https://github.com/emilyporterfieldtaylor/eat_da_burger"><img src={githubLogo} alt="github" /></CardLink>
                <a href="https://young-basin-91756.herokuapp.com/" className={"stretched-link"}></a>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col m={6}>
        <div>
            <Card>
              <CardBody>
                <CardTitle>
                  Design-A-Date
                </CardTitle>
              </CardBody>
              <CardImg width="100%" src={datingImage} alt="Card image cap" />
              <CardBody>
                <CardLink href="https://github.com/ChristopherNeill/GroupProject"><img src={githubLogo} alt="github" /></CardLink>
                <a href="https://christopherneill.github.io/GroupProject/" className={"stretched-link"}></a>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <Col m={6}>
        <div>
            <Card>
              <CardBody>
                <CardTitle>
                  Weather Dashboard
                </CardTitle>
              </CardBody>
              <CardImg width="100%" src={weatherImage} alt="Card image cap" />
              <CardBody>
                <CardLink href="https://github.com/emilyporterfieldtaylor/weather_dashboard"><img src={githubLogo} alt="github" /></CardLink>
                <a href="https://emilyporterfieldtaylor.github.io/weather_dashboard/" className={"stretched-link"}></a>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col m={6}>
        <div>
            <Card>
              <CardBody>
                <CardTitle>
                  Code Quiz
                </CardTitle>
              </CardBody>
              <CardImg width="100%" src={codeQuizImage} alt="Card image cap" />
              <CardBody>
                <CardLink href="https://emilyporterfieldtaylor.github.io/code_quiz/"><img src={githubLogo} alt="github" /></CardLink>
                <a href="https://github.com/emilyporterfieldtaylor/code_quiz" className={"stretched-link"}></a>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;