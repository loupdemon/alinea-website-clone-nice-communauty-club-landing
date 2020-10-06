import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Col, Row, Button, Card } from 'react-bootstrap';

import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { RiLinkedinFill } from 'react-icons/ri';
import { CgFacebook } from 'react-icons/cg';
import { AiOutlineMedium } from 'react-icons/ai';

import '../css/ContactUs.css'

import brandlogo from '../assets/brandlogo.png'

const ContactUs = () => {

    return(
        
        <Container fluid className="contact-us">
        
        <Container>
        
        
        <Row>

        <Col xs={12} md={4}></Col>

        <Col xs={12} md={4}>
        
        <Card body className="herocard mt-3">
                    
                    
        <div>
        
        <input type="email" placeholder="" className="inputemail" />
        <Button className="submit cardbtn float-right">Subscribe</Button>
        </div>
        </Card>
        
        </Col>

        <Col xs={12} md={4}></Col>

        </Row>
       


    <Row>

        <Col xs={12} md={3} className="mb-5 mt-5 ml-3 mr-3">
        
        <Container>
            <img
            src={brandlogo}
            width="40%"
            height="40%"
            className="d-inline-block align-top brandlogo"
            alt="React Bootstrap logo"
            />

            <p className="text-white mt-3 mb-2">
            Alinea Invest makes responsible investing fun, easy, and social with learning features.
            </p>

            <p className="mt-3">
            <span className="mr-3"><FiInstagram size={20} style={{ color:'white' }} /></span>
            <span className="mr-3"><RiLinkedinFill size={20} style={{ color:'white' }} /></span>
            <span className="mr-3"><FiTwitter size={20} style={{ color:'white' }} /></span>
            <span className="mr-3"><CgFacebook size={20} style={{ color:'white' }} /></span>
            <span className="mr-3"><AiOutlineMedium size={20} style={{ color:'white' }} /></span>
            </p>

        </Container>
        </Col>



        <Col xs={12} md={3}></Col>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={3}></Col>
    </Row>
        
        
        </Container>
        </Container>

    )

}

export default ContactUs;