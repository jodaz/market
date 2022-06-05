import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({ children }) => {
    const { state: { isAuth } } = useAuth();
    
    return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute