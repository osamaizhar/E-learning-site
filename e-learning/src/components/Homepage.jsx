import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import NAV from './nav';

import Footer from './last';
const Homepage = () => {
  return (
    <div>
      <Container fluid>
      <NAV/>
      <Row className='bg-dark text-light py-5'>
        
        <Col id={"label"} md={6}>

          <h1>Your Fitness Tracker</h1>
          <p>Track your routines, set goals and get fit.</p>
              <Link to="form">
            <Button variant='primary' size='lg'>
              Open App Form
            </Button>{' '}
          </Link>
          
        </Col>
        <Col md={6}>
          <img 
            src='https://www.muscleandfitness.com/wp-content/uploads/2016/09/Bodybuilder-Working-Out-His-Upper-Body-With-Cable-Crossover-Exercise.jpg?quality=86&strip=all0'
            alt='fitness tracker'
            className='img-fluid rounded'
            id="img1"
          />
        </Col>
      </Row>
      <Row className='py-5'>
        <Col md={4}>
          <h3>Set Your Goals</h3>
          <p>Choose from pre-built plans or customize your own.</p>
        </Col>
        <Col md={4}>
          <h3>Track Your Progress</h3>
          <p>Log your activities to see how you're doing.</p>
        </Col>
        <Col md={4}>
          <h3>Stay Motivated</h3>
          <p>See your progress and celebrate your achievements.</p>
        </Col>
      </Row>
      {/* <Row className='bg-secondary text-white py-5'>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Get Started Today!</h2>
          <Button variant='primary' size='lg'>
            Sign Up
          </Button>{' '}
        </Col>
      </Row> */}
         </Container>
         <Footer/>   
    </div>
    
  );
};

export default Homepage;
