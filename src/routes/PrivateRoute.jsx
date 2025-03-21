import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const { user, loader } = useContext(AuthContext);

    if (loader) {
        return <div className=""><span className="loading loading-dots loading-xl"></span></div>
    }

    if (user) {
        return children;
    }

    return (
        <div>
            <Navigate to='/login' />
        </div>
    );
};

export default PrivateRoute;