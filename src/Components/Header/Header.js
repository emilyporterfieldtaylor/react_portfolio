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
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">Disabled Link</NavLink>
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