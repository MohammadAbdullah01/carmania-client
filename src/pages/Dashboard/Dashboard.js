import React, { useState } from 'react';
import { Alert, Button, Offcanvas } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='mt-2 mb-5'>
            <Button variant="primary" className="d-lg-none" onClick={handleShow}>
                OPEN MENU
            </Button>

            {/* <Alert variant="info" className="d-none d-lg-block">
                Resize your browser to show the responsive offcanvas toggle.
            </Alert> */}

            <Offcanvas show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Welcome to dashboard!</Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Link style={{ backgroundColor: "orange", padding: "10px 8px", borderRadius: "5px ", color: "white", textDecoration: "none" }} to='/dashboard'>My Orders</Link><br />
                </Offcanvas.Body>
            </Offcanvas>
            <Outlet />
        </div>
    );
};

export default Dashboard;