import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import {Navbar,Nav,Container,} from 'react-bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <div className='Navigation'>
      <Navbar bg="light" data-bs-theme="light" fixed="top" >
        <Container>
          <Navbar.Brand href="home">Modhub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="game-mod">게임모드</Nav.Link>
            <Nav.Link href="community">커뮤니티</Nav.Link>
            <Nav.Link href="test">테스트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;