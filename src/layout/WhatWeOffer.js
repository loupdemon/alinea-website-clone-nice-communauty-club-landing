import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Col, Row, Image } from 'react-bootstrap';

import '../css/WhatWeOffer.css'

import feature from '../assets/feature1.gif'

import Offer from './Component/Offer'

const WhatWeOffer = () => {

    return(
       
        <Container fluid className="card-sec">
        <Container >
        
            <h1 className="text-center card-sec-heading"> What does Alinea offer? </h1>

            <Row className="mt-5">
            <Col xs={{ order: 'second', span: 12 }}  md={{ order: 'first', span: 4 }} className="" >
            
            
               <Offer heading="Custom Portfolios" content="Pre-packaged portfolios for you." />

               <Offer heading="Kickass Community" content="Our community is here to support you every step of the way." />

               <Offer heading="Speedy Support" content="We have quick answers to all your investing questions." />
            

            </Col>

            <Col xs={{ order: 'first', span: 12 }}  md={{ order: 'first', span: 4 }} className="d-flex justify-content-center" >

            <Image  src={feature} height="100%" width="90%" className="feature" />

            </Col>

            <Col xs={{ order: 'last', span: 12 }}  md={{ order: 'last', span: 4 }} className="" >
            
                <Offer heading="Fractional Shares" content="Invest in any share with as little as $1." />

                <Offer heading="Invest with Intention" content="We give you the right information to make an impact." />

                <Offer heading="Learn & Grow" content="We make learning fun and easy." />               

            </Col>
          </Row>
        
        </Container>
        </Container>

    )

}

export default WhatWeOffer;