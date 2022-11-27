import React from 'react';
import { Col, Row } from 'react-bootstrap';
import banner from '../../../assets/images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Row className='my-5 d-flex justify-content-center align-items-center'>

            <Col className='hi' sm={12} md={6}>
                <h1>Find the Car You Want, Your Way </h1>
                <h4 className='mt-2'> Then, build your deal to fit your needs.</h4>
            </Col>
            <Col sm={12} md={6}><img className='banner-img' src={banner} alt="" /></Col>
        </Row>
    );
};

export default Banner;