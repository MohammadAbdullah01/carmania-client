import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';

const BookingModal = ({ show, handleClose, selectedCar }) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const phone = e.target.phone.value;
        const locationOfMeeting = e.target.locmeet.value;
        console.log(phone, locationOfMeeting);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            body: JSON.stringify({
                car: selectedCar,
                user: user?.displayName,
                email: user?.email,
                phone: phone,
                locationOfMeeting: locationOfMeeting
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                toast.success("Order Completed")
                navigate('/dashboard')
            });
        handleClose()
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <h3 className='d-block ml-75'>Confirm for <span style={{ color: "green" }}>{selectedCar?.name}, {selectedCar?.resalePrice}$  </span>only</h3 >
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="text"
                            value={user?.displayName}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="email"
                            value={user?.email}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="number"
                            name="phone"
                            placeholder="Phone Number"
                            required
                        // autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="text"
                            name="locmeet"
                            placeholder="Location of meeting"
                            required
                        // autoFocus
                        />
                    </Form.Group>
                    <hr />
                    <div className='d-flex justify-content-end'>
                        <div>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button className='ms-2' variant="primary" type="submit">submit</Button>
                        </div>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default BookingModal;