import { reload } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

const useRole = (user) => {
    const [userLoading, setUserLoading] = useState(true)
    const [userRole, setUserRole] = useState("buyer")
    const email = user?.email;
    console.log("hi");
    useEffect(() => {
        fetch(`https://carmania-server-render.onrender.com/user/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserRole(data.role)
                setUserLoading(false)
            })
    }, [email])


    return [userRole, userLoading]
};

export default useRole;