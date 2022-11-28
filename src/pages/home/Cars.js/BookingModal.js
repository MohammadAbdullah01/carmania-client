import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';

const BookingModal = ({ show, handleClose, selectedCar }) => {
    const [user, loading, error] = useAuthState(auth);

    console.log(selectedCar);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <h3 className='d-block ml-75'>Confirm for <span style={{ color: "green" }}>{selectedCar?.name}, {selectedCar?.resalePrice}$  </span>only</h3 >
            </Modal.Header>
            <Modal.Body>
                <Form>
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
                            placeholder="Phone Number"
                            required
                        // autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="text"
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
                            <Button className='ms-2' variant="primary" onClick={handleClose} type="submit">submit</Button>
                        </div>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default BookingModal;