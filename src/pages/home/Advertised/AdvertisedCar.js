import React from 'react';
import { Button, Card } from 'react-bootstrap';

const AdvertisedCar = ({ car, setSelecTedCar, handleShow }) => {
    const handleBooking = () => {
        handleShow()
        setSelecTedCar(car)
    }

    return (
        <Card style={{ minWidth: '300px', margin: "0 auto" }}>
            <Card.Img style={{ height: "180px", objectFit: "cover" }} variant="top" src={car?.img} />
            <Card.Body>

                {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text> */}
                <div className='d-flex justify-content-between'>
                    <span className='d-block fw-bold'>{car?.name}</span >
                    <span className='fw-bold'>Sell Price: {car?.resalePrice}$</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span className='small '>Seller: {car?.sellerName}</span>
                    <span className='small'>Original Price: {car?.originalPrice}$</span>
                </div>
                <span className='small d-block mt-2'>Location: {car?.location}</span>
                <span className='small d-block'>Years Of Use: {car?.yearsOfUse}</span>
                <span className='small d-block'>Post Date: {car?.postDate}</span>

                <Button className='d-block mx-auto mt-2' variant="primary"
                    onClick={handleBooking}>
                    Buy Now
                </Button>
            </Card.Body>
        </Card>
    );
};

export default AdvertisedCar;