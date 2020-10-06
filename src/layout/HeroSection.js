import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, NavDropdown, Container, Row, Col, Image  } from 'react-bootstrap';


import '../css/HeroSection.css'
import phone1 from '../assets/phone1.gif'
import appstore from '../assets/apple.png'

const HeroSection = () => {

    return(
        
        <Container fluid className="hero-bg">
        <Container>
        

        <Row >
            <Col xs={{ order: 'first', span: 12 }}  md={{ order: 'first', span: 6 }} >

            <h1 className="text-white slogan-1">Not Your <span className="typical" >Typical</span> <br/>
             Investing App </h1>

            <h4 className="text-white slogan-2"> Invest with Intention </h4>

            <h6 className="text-white slogan-3">Alinea makes responsible investing fun, easy and social.</h6>

            
            <button type="button" onclick="" className="mt-3 mr-2 mb-2 ml-2 btn-journey " >
                <Nav.Link href="" className="btn-jr">Start your Journey</Nav.Link>
            </button>

            <br/>
            
            <Image  src={appstore} className="appstore" />            

            </Col>
           
            <Col xs={{ order: 'last', span: 12 }}  md={{ order: 'last', span: 6 }} > 
            
            <Image  src={phone1} className="phone1" />

            </Col>
        </Row>


        </Container>
        </Container>

    )

}

export default HeroSection;