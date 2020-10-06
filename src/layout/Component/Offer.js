import React from 'react'

import { Card, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { GiDonut } from 'react-icons/gi'

import '../../css/card/Offer.css'


const Offer = ({logo=" ", heading=" ", content=" "}) => {

  

    return(
       
        <Container className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="offer-card">
                <Card.Body>
                  
                    <Card.Title className="offer-heading">   <GiDonut className="mr-4 icon" />
                    {heading}</Card.Title>
                    
                    <Card.Text className="ml-5 offer-content">
                    {content}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </Container>
    )

}

export default Offer;