import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Container } from 'react-bootstrap'

import '../../css/card/Card.css'

const MyCard = ({emoji=" ", heading=" ", content=" "}) => {

    return(
       
        <Card style={{ width: '21rem' }} className="my-card mt-2 mb-1">
            <Container fluid>
            <Container>
            <Card.Body>
                <Card.Title className="mt-5 mb-5"><span className="emoji"> {emoji} </span></Card.Title>
                <Card.Subtitle className="mb-2 text-dark font-weight-bold"> {heading} </Card.Subtitle>
                    <Card.Text className="card-content mt-3">
                    {content}
                    </Card.Text>
                
            </Card.Body>
            </Container>
            </Container>
        </Card>
        
    )

}

export default MyCard;