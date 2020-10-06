import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Col, Row } from 'react-bootstrap';

import MyCard from './Component/MyCard'

import '../css/CardSection.css'

const CardSection = () => {

    return(
       
        <Container fluid className="card-sec">
        <Container >
        
            <h1 className="text-center card-sec-heading">We get it. 🤷🏽‍♀️ <br/> Investing is overwhelming, <br/> but it doesn’t have to be.</h1>

            <Row className="mt-5">
            <Col xs={12} md={4} className="d-flex justify-content-center" >
            
                <MyCard 
                emoji="👩‍👩‍👧‍👧"
                heading="Community"
                content="We all need someone to lean on and investing is no different.
                As part of our community, you get the support to embark and continue on your journey."
                />

            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center" >

                <MyCard
                emoji="💸"
                heading="Responsible Investing"
                content="Make your money moves matter!
                Express your values and interests through your investments."
                />

            </Col>

            <Col xs={12} md={4} className="d-flex justify-content-center" >
            
                <MyCard
                emoji="🌱"
                heading="Learning"
                content="We eliminate all the unnecessary financial jargon.
                Learn as you go with our interactive mini capsules and before you know it, you’ll be a confident investor."
                />

            </Col>
          </Row>
        
        </Container>
        </Container>

    )

}

export default CardSection;