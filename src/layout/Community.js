import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Col, Row, Nav } from 'react-bootstrap';

import '../css/Community.css'

const Community = () => {

    return(
        
        <Container fluid className="community">
        <Container>
        
        <Row>
        
        <Col xs={12} md={6} className="community-sec">
        
        <h1 className="text-white mt-5">BECOME A PART OF OUR KICKASS COMMUNITY</h1>

        <p className="text-white mt-3">We can’t do this alone, so we need each other, especially you.
        Join our community and get started on your investing journey!</p>

        <button type="button" onclick="" className="mt-3 mr-2 mb-5 ml-2 btn-journey " >
                <Nav.Link href="" className="btn-jr">Join Now</Nav.Link>
            </button>

        </Col>

        <Col xs={12} md={6}>
        
        </Col>

        </Row>
        
        </Container>
        </Container>

    )

}

export default Community;