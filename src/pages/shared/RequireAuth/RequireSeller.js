import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import useRole from '../../../hooks/useRole';

const RequireSeller = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [userRole, userLoading] = useRole(user)
    const location = useLocation()
    console.log('from re ad');
    if (loading || userLoading) {
        return <p className='text-center mt-5'>Loading...</p>
    }
    console.log(userRole);
    if (!user || userRole !== "seller") {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireSeller;