import * as React from 'react'
import { useAuth } from '../context/AuthContext'
import Unauthorized from '../pages/Unauthorized';
import LoadingIndicator from './LoadingIndicator'

const PrivateRoute = ({ children, authorize = null }) => {
    const { state: { user } } = useAuth();
    const [authorized, setAuthorized] = React.useState(null);

    React.useEffect(() => {
        if (authorize) {
            const authorizedRoles = authorize.split(',');
            const { roles } = user;
            const isAuthorized = roles.filter(role => authorizedRoles.includes(role));

            setAuthorized(isAuthorized.length ? true : false)
        } else {
            setAuthorized(null)
        }
    }, [authorize])

    console.log(authorized)

    if (authorized == null) return <LoadingIndicator />;

    if (authorized == false) return <Unauthorized />;

    return children;
};

export default PrivateRoute