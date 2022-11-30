import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const MyCars = () => {
    const [cars, setCars] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const [apiLoading, setApiLoading] = useState(false)
    useEffect(() => {
        axios.get(`https://carmania-server-render.onrender.com/sellercars/${user?.email}`)
            .then(response => {
                setCars(response.data);
            });
    }, [user?.email, apiLoading]);
    const handleDelete = (id) => {
        const proceed = window.confirm("Want to delete?")
        if (proceed) {
            fetch(`https://carmania-server-render.onrender.com/cardelete/${id}`, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    setApiLoading(!apiLoading)
                    console.log("success")
                })
        }
    }
    const handleAdvertise = (id) => {
        const proceed = window.confirm("Want to advertise this car?")
        if (proceed) {
            fetch(`https://carmania-server-render.onrender.com/advertisecar/${id}`, {
                method: "put",
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    setApiLoading(!apiLoading)
                    console.log(data)
                })
        }
    }
    return (
        <div>
            <h1 className='text-center my-2'>My Cars</h1>
            <Table className='text-center' striped bordered hover>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Car</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {cars?.map((car, index) => <tr
                        key={car._id}
                    >
                        <td>{index + 1}</td>
                        <td>{
                            <div>
                                <img style={{ width: "100px" }} src={car.img} alt="" />
                                <h4>{car.name}</h4>
                            </div>
                        }</td>
                        <td>{car.sold ? "Sold out" : "Available"}</td>
                        <td><Button onClick={() => handleDelete(car._id)} variant='danger'>Delete</Button>{car.advertised ?
                            <p className='mt
                            -2'>Advertised</p>
                            :
                            <Button onClick={() => handleAdvertise(car._id)} className='ms-1'>Advertise</Button>
                        }</td>
                    </tr>)}

                </tbody>
            </Table>
        </div>
    );
};

export default MyCars;