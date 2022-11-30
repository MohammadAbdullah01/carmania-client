import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import useToken from '../../../hooks/useToken';
import google from '../../../assets/images/google.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Form, Spinner } from 'react-bootstrap';

const Signup = ({ reLoad, setReload }) => {
    const [userOrSeller, setUserOrSeller] = useState("user")
    const [userName, setUserName] = useState('')
    const seeCondition = () => {
        if (userOrSeller == "user") {
            setUserOrSeller("seller")
        } else {
            setUserOrSeller("user")
        }
    }
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user2,
        loading2,
        error2,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const location = useLocation()
    const navigate = useNavigate()
    const [token] = useToken(user || user2, userOrSeller)
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [user, user2, from, navigate, token])
    const [updateProfile, updating, nameError] = useUpdateProfile(auth);

    const handleRegister = async (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('please give a proper email address', { id: "2" })
            return;
        }
        if (password.length < 6) {
            toast.error('password length too short', { id: "2" })
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
    }
    useEffect(() => {
        if (error?.message?.includes("auth/email-already-in-use") || error2?.message?.includes("auth/email-already-in-use")) {
            toast.error("user already exist", { id: "15" })
        }
    }, [error, error2])
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        setReload(!reLoad)
    }
    return (
        <div className='login-container'>
            <div className='form-container'>
                <h1 className='login-title'>Please Sign up</h1>
                <div>
                    <form onSubmit={handleRegister}>
                        <div className='form-input-group'>
                            <label htmlFor="name">Enter Your Name</label>
                            <input onChange={(e) => setUserName(e.target.value)} type="text" name="name" id="name" required />
                        </div>
                        <div className='form-input-group'>
                            <label htmlFor="email">Enter Your Email</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className='form-input-group'>
                            <label htmlFor="password">Enter Your Password</label>
                            <input type="password" name="password" id="password" required />
                        </div>
                        {(loading || loading2) && <p>
                            <Spinner animation="border" variant="success" />
                        </p>}
                        <Form.Check
                            onClick={seeCondition}
                            className='w-50 mx-auto mb-3'
                            type="switch"
                            id="custom-switch"
                            label="Create account as a seller"
                        />
                        <input className='login-btn' type="submit" value="Sign up" />
                    </form>
                    <div className='login-mechanism'><p>Already have an account? <span onClick={() => navigate('/login')} style={{ color: "orange", cursor: "pointer" }}>Login</span></p></div>
                </div>
                <button className='social-login' onClick={handleSignInWithGoogle}> <img style={{ height: "25px", marginBottom: "2px", marginRight: "5px" }} src={google} alt="" /> Continue with google</button>
            </div>
        </div>
    );
};

export default Signup;