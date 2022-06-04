import * as React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link as RouterLink } from 'react-router-dom';

const ListItemLink = props => {
    const { icon, primary, to, ...rest } = props;
  
    const renderLink = React.useMemo(
        () =>
            React.forwardRef(function Link(itemProps, ref) {
                return <RouterLink
                    to={to}
                    ref={ref}
                    {...itemProps}
                    role={undefined} 
                />;
            }),
        [to],
    );
  
    return (
        <li>
            <ListItem button component={renderLink} {...rest}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}

export default ListItemLink