import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit';
import LinkBehavior from './LinkBehavior';

const EditButton = ({ href, ...rest }) => (
    <Button component={LinkBehavior} to={href} {...rest}>
        <EditIcon />
    </Button>
)

export default EditButton
