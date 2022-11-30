import React, { useEffect, useState } from 'react';
import { Alert, Button, Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import useRole from '../../hooks/useRole';
import useToken from '../../hooks/useToken';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const [userRole, userLoading] = useRole(user);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [token, setToken] = useToken(user)
    // setTimeout(function () {
    //     window.location.reload();
    // }, 1);

    const [ploading, setpLoading] = useState(false)


    useEffect(() => {
        fetch(`https://carmania-server-render.onrender.com/orders/{user.?email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [user])
    if (userLoading) {
        return <p className='text-center mt-5'>Loading...</p>
    }
    return (
        <div className='mt-2 mb-5'>


            {/* for user  */}
            {userRole == "user" && <>
                <Button variant="primary" className="d-lg-none" onClick={handleShow}>
                    OPEN MENU
                </Button>
                <Offcanvas show={show} onHide={handleClose} responsive="lg">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Welcome to dashboard!</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Link style={{ backgroundColor: "blue", padding: "10px 8px", borderRadius: "5px ", color: "white", textDecoration: "none" }} to='/dashboard'>My Orders</Link><br />
                    </Offcanvas.Body>
                </Offcanvas>
                <Outlet />
            </>}

            {/* for seller  */}
            {userRole == "seller" && <>
                <Button variant="primary" className="d-lg-none" onClick={handleShow}>
                    OPEN MENU
                </Button>
                <Offcanvas show={show} onHide={handleClose} responsive="lg">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Welcome to dashboard!</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Link style={{ backgroundColor: "blue", padding: "10px 8px", borderRadius: "5px ", color: "white", textDecoration: "none" }} to='/dashboard'>My Products</Link><br />
                        <Link style={{ backgroundColor: "blue", padding: "10px 8px", borderRadius: "5px ", color: "white", textDecoration: "none", marginLeft: "5px" }} to='addcar'>Add a new car</Link><br />
                    </Offcanvas.Body>
                </Offcanvas>
                <Outlet />
            </>}



            {/* for admin  */}
            {userRole == "admin" && <>
                <Button variant="primary" className="d-lg-none" onClick={handleShow}>
                    OPEN MENU
                </Button>
                <Offcanvas show={show} onHide={handleClose} responsive="lg">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Welcome to dashboard!</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Link style={{ backgroundColor: "blue", padding: "10px 8px", borderRadius: "5px ", color: "white", textDecoration: "none" }} to='/dashboard'>All Sellers</Link><br />
                        <Link style={{ backgroundColor: "blue", padding: "10px 8px", borderRadius: "5px ", color: "white", textDecoration: "none", marginLeft: "5px" }} to='allbuyers'>All Buyers</Link><br />
                    </Offcanvas.Body>
                </Offcanvas>
                <Outlet />
            </>}
        </div>
    );
};

export default Dashboard;