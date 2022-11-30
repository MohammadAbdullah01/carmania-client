import React from 'react';
import { Button, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const ViewAllSellers = () => {
    // const [user, loading, error] = useAuthState(auth);


    const { isLoading, data: sellers, refetch } = useQuery(['allsellers'], () =>
        fetch(`https://carmania-server-render.onrender.com/allsellers`, {
            method: "get",
        }).then(res => {
            return res.json()
        }
        )
    )
    if (isLoading) {
        return <p className='text-center mt-5'>Loading...</p>
    }
    const handlelDelete = (id) => {
        const proceed = window.confirm("sure to delete?")
        if (proceed) {
            fetch(`https://carmania-server-render.onrender.com/deletebuyer/${id}`, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Buyer Deleted")
                    refetch()
                })
        }

    }
    return (
        <div className='py-5'>
            <h1 className='text-center'>Order List</h1>
            <Table className='text-center' striped bordered hover>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Seller Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {sellers?.map((seller, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{seller?.user}$</td>
                        <td><Button >VERIFY</Button> <Button className='ms-1' onClick={() => handlelDelete(seller._id)}>DELETE</Button></td>

                    </tr>)}

                </tbody>
            </Table>
        </div>
    );
};

export default ViewAllSellers;