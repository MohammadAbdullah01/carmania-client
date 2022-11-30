import React from 'react';
import { useNavigate } from 'react-router-dom';
import img404 from '../../../assets/images/404.gif'
import { BsFillHandIndexThumbFill } from "react-icons/bs";



const NotFound = () => {
    const navigate = useNavigate()
    const handle = () => {
        navigate('/')
        window.location.reload()
    }
    return (
        <div style={{ position: "relative" }}>
            <img className='w-100' src={img404} alt="" />
            <p onClick={handle} style={{ position: "absolute", top: "25%", backgroundColor: "red", color: "white", padding: "10px 15px", fontSize: "25px", left: "50%", cursor: "pointer" }}>please click to RELOAD <BsFillHandIndexThumbFill /></p>
        </div>
    );
};

export default NotFound;