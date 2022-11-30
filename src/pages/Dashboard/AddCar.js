import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const AddCar = () => {
    const [user, loading, error] = useAuthState(auth);

    // name
    // "Hava Driven"
    // category
    // "electric"
    // sellerName
    // "Mustak"
    // img
    // "https://i.ytimg.com/vi/N7qLp2XvdjY/maxresdefault.jpg"
    // originalPrice
    // 18500
    // resalePrice
    // 16500
    // yearsOfUse
    // 1
    // postDate
    // "1-09-2022"
    // location
    // "Bandura, Barisal"
    // sellerEmail
    // "mustak@gmail.com"
    // sold
    // false
    // advertised
    // true

    // const date = new Date().toLocaleDateString;
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const category = e.target.category.value;
        const sellerName = user?.displayName;
        const img = e.target.img.value;
        const originalPrice = e.target.originalPrice.value;
        const resalePrice = e.target.resalePrice.value;
        const yearsOfUse = e.target.yearsOfUse.value;
        const postDate = new Date().toLocaleDateString();
        const location = e.target.location.value;
        const sellerEmail = user?.email;
        const sold = false;
        const advertised = false;
        const newCar = {
            name: name,
            category: category,
            sellerName: sellerName,
            img: img,
            originalPrice: originalPrice,
            resalePrice: resalePrice,
            yearsOfUse: yearsOfUse,
            postDate: postDate,
            location: location,
            sellerEmail: sellerEmail,
            sold: sold,
            advertised: advertised
        }
        fetch('https://carmania-server-render.onrender.com/cars', {
            method: "post",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset()
                toast.success("Product Added")
                navigate('/dashboard')
            })
    }
    return (
        <div>
            <h1 className='text-center mt-4 mb-2'>Add a new car</h1>
            <div className=' w-75 mx-auto'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="name" placeholder="Car name" required />
                    </Form.Group>
                    <Form.Select className="mb-3" name="category" aria-label="Default select example" required>
                        <option>Select Category</option>
                        <option value="microbus" >microbus</option>
                        <option value="luxury">luxury</option>
                        <option value="electric">electric</option>
                    </Form.Select>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Seller Name" />
                    </Form.Group> */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="img" placeholder="Image URL with .jpg or .png extension" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="number" name="originalPrice" placeholder="Original Price" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="number" name="resalePrice" placeholder="Resale Price" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="number" name="yearsOfUse" placeholder="Years of use" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="location" placeholder="Location" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddCar;