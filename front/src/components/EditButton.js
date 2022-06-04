import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit';
import LinkBehavior from './LinkBehavior';

const EditButton = ({ href, ...rest }) => (
    <IconButton component={LinkBehavior} to={href} {...rest}>
        <EditIcon />
    </IconButton>
)

export default EditButton
