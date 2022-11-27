import React from 'react';
import { Col, Row } from 'react-bootstrap';
import sell from '../../../assets/images/sell.svg'
import buy from '../../../assets/images/buy.svg'
import meet from '../../../assets/images/meet.svg'
import './HowWork.css'

const HowWork = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>How Car Mania Work?</h1>
            <Row>
                <Col className="d-flex flex-column justify-content-between mb-3" sm={12} md={6} lg={4}>
                    <div>
                        <h4 className='fw-bold'>Sell Your Car</h4>
                        <p>You can sell your used cars here by posting your cars image with it's details.</p>
                    </div>
                    <div>
                        <img className='hwImg' src={sell} alt="" />
                    </div>
                </Col>
                <Col className="d-flex flex-column justify-content-between mb-3" sm={12} md={6} lg={4}>
                    <div>
                        <h4 className='fw-bold'>Buy Car</h4>
                        <p>Buy used cars as you want. You will get different type and different price cars here.</p>
                    </div>
                    <div>
                        <img className='hwImg' src={buy} alt="" />
                    </div>
                </Col>
                <Col className="d-flex flex-column justify-content-between mb-3" sm={12} md={6} lg={4}>
                    <div>
                        <h4 className='fw-bold'>Receive Car</h4>
                        <p>You have to meet with seller/buyer to sell/buy car at your desired location</p>
                    </div>
                    <div>
                        <img className='hwImg' src={meet} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default HowWork;