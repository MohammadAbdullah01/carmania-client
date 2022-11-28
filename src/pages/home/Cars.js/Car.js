import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Car = ({ car, handleShow, setSelecTedCar }) => {
    const { name, sellerName, originalPrice, resalePrice, yearsOfUse, postDate, location, img } = car;
    const handleBooking = () => {
        handleShow()
        setSelecTedCar(car)
    }
    return (
        <Col className='mt-3' sm={12} md={6} lg={4}>
            <Card style={{ minWidth: '100%', margin: "0 auto" }}>
                <Card.Img style={{ height: "180px", objectFit: "cover" }} variant="top" src={img} />
                <Card.Body>

                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text> */}
                    <div className='d-flex justify-content-between'>
                        <span className='d-block fw-bold'>{name}</span >
                        <span className='fw-bold'>Sell Price: {resalePrice}$</span>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <span className='small '>Seller: {sellerName}</span>
                        <span className='small'>Original Price: {originalPrice}$</span>
                    </div>
                    <span className='small d-block mt-2'>Location: {location}</span>
                    <span className='small d-block'>Years Of Use: {yearsOfUse}</span>
                    <span className='small d-block'>Post Date: {postDate}</span>
                    {/* <Button className='d-block mx-auto mt-2' variant="primary">Buy Now</Button> */}
                    <Button className='d-block mx-auto mt-2' variant="primary"
                        onClick={handleBooking}>
                        Buy Now
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Car;