import React from 'react';
import "./style.css";
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

function Header() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <h3>Emily Taylor</h3>
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
                  <NavLink href="#">Portfolio</NavLink>
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