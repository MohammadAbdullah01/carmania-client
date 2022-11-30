import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';

const Car = ({ car, handleShow, setSelecTedCar }) => {
    const [user, loading, error] = useAuthState(auth);
    const [cUser, setCUser] = useState(null)
    const { name, sellerName, originalPrice, resalePrice, yearsOfUse, postDate, location, img } = car;
    useEffect(() => {
        fetch(`https://carmania-server-render.onrender.com/getuser/${user?.email}`)
            .then(res => res.json())
            .then(data => setCUser(data))
    }, [user?.email])
    const handleBooking = () => {
        handleShow()
        setSelecTedCar(car)
    }
    console.log(cUser)
    return (
        <Col className='mt-3' sm={12} md={6} lg={4}>
            <Card style={{ minWidth: '100%', margin: "0 auto" }}>
                <Card.Img style={{ height: "180px", objectFit: "cover" }} variant="top" src={img} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <span className='d-block fw-bold'>{name}</span >
                        <span className='fw-bold'>Sell Price: {resalePrice}$</span>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <span className='small '>Seller: {sellerName}{cUser?.verified == true && <p>verified</p>} </span>
                        <span className='small'>Original Price: {originalPrice}$</span>
                    </div>
                    <span className='small d-block mt-2'>Location: {location}</span>
                    <span className='small d-block'>Years Of Use: {yearsOfUse}</span>
                    <span className='small d-block'>Post Date: {postDate}</span>
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