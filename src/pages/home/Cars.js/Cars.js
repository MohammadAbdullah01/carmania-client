import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import BookingModal from './BookingModal';
import Car from './Car';

const Cars = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedCar, setSelecTedCar] = useState({})
    const { cartCategory } = useParams()
    const { isLoading, error, data, refetch } = useQuery('carscollection', () => fetch(`http://localhost:5000/cars/${cartCategory}`).then(res => res.json()))
    if (isLoading) {
        return <p className='mt-5 text-center'>Loading...</p>
    }
    return (
        <>
            <Row>
                {data?.map(car => <Car
                    key={car._id}
                    car={car}
                    handleShow={handleShow}
                    setSelecTedCar={setSelecTedCar}
                ></Car>)}
            </Row>
            <BookingModal show={show} handleClose={handleClose} selectedCar={selectedCar} />
        </>
    );
};

export default Cars;