import React from 'react';
import "./style.css";
import githubLogo from "../Images/GitHub-Mark-32px.jpg";
import linkedinLogo from "../Images/LI-In-Bug.jpg";
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

function Header() {
  return (
    <div>
      <Container>
        <Row className="Header">
          <Col md={2}>
            <h3>Emily Taylor</h3>
          </Col>
          <Col md={1}>
            <a href="https://github.com/emilyporterfieldtaylor">
              <img src={githubLogo} alt="github" />
            </a>
          </Col>
          <Col md={1}>
            <a href="https://www.linkedin.com/in/emily-taylor-8333a6124/">
              <img className="linkedinLogo" src={linkedinLogo} alt="linkedin" />
            </a>
          </Col>
          <Col md={8}>
            <div>
              <Nav>
                <NavItem>
                  <NavLink href="/index">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/portfolio">Portfolio</NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  )
}

export default Header;