import React from 'react';
import {Container, Row, Col, Nav, NavItem, NavLink} from 'reactstrap';

function Index() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <h3>Emily Taylor</h3>
          </Col>
          <Col md={8}>
          <div>
      <p>List Based</p>
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
      <hr />
    </div>
          </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Index;