import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../../firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import profileImg from '../../../assets/images/profile.png'

const NavBar = () => {
    let navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken")
    }
    const handlerRefetchUsers = () => {
        fetch('https://carmania-server-render.onrender.com/users')
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} bg="" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand className='pointer' onClick={() => navigate('/')} >Car Mania</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                    <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
                                    {user && <Nav.Link as={Link} onClick={handlerRefetchUsers} to="/dashboard">Dashboard</Nav.Link>}
                                    {user && <span className='d-flex justify-content-center align-items-center'><span>
                                        <img style={{ width: "25px" }} src={profileImg} alt="" /> <span className="ps-1 fw-bold">{user?.displayName}</span>
                                    </span></span>}
                                    {user ?
                                        <Button onClick={logOut} className='ms-2' variant="outline-success">
                                            log out
                                        </Button>
                                        :
                                        <Button onClick={() => navigate("/login")} className='ms-2' variant="outline-success">
                                            Login
                                        </Button>
                                    }
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};

export default NavBar;