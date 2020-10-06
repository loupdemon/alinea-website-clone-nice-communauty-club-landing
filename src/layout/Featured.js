import React from 'react'

import MyCaro from './Component/MyCaro'

import { Container, Col, Row, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/Featured.css'

const Featured = () => {

    return(
        <Container className="mt-5 mb-5 featured">
        <MyCaro />
        </Container>
    )

}

export default Featured;