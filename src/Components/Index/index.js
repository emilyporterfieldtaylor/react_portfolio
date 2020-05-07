import React from 'react';
import japanSquare from "../Images/japanSquare.jpg"
import './style.css';
import {Container, Row, Col} from 'reactstrap';

function Index() {
  return (
    <div>
        <Container>
          <Row>
            <Col md={6}>
              <img src={japanSquare} alt="Emily in Japan" />
            </Col>
            <Col md={6}>
            <p class="flow-text">This is a third attempt at a portfolio for the UT Full Stack coding Bootcamp. This
                website utilizes React and Reactstrap.
                The goal was to take our portfolio and update it using react. The second iteration of my portfolio featured the Materialize framework which I found did not work as with with react as Reactstrap.
                Please visit the portfolio page to see other projects I have worked on. The projects feature technologies like Node, Sequelize, Heroku and many more. Currently, my Contact page is under construction.</p>
              <p class="flow-text">I recently moved to Austin but I've lived in the Austin area for the past 8 years. I
                have two kitties, Calcifer and Sofie, named after characters from one of my favorite movies, Howl's Moving Castle. I try to
                spend as much time outside as Covid-19 will allow. I like to hunt for mushrooms or nice little shady
                spots to read and draw. I also really enjoy playing D&D and video games. I'm just a lady trying to
                further her education since I'm not doing a damn thing with my
                Psychology degree. I've worked in IT adjacent jobs for the past few years and I'm ready to actually do
                some real creative computer work!</p>
              <p class="flow-text">Cheers!</p>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Index;