import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HomeIcon from '@mui/icons-material/Home';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

export const routes = [
    {
        name: 'Inicio',
        route: '/',
        icon: <HomeIcon />
    },
    {
        name: 'Contribuyentes',
        route: '/taxpayers',
        icon: <BusinessCenterIcon />
    },
    {
        name: 'Cubículos',
        route: '/cubicles',
        icon: <AddBusinessIcon />
    },
    {
        name: 'Rubros',
        route: '/items',
        icon: <ShoppingBasketIcon />
    }
]

export const adminRoutes = [
    {
        name: 'Usuarios',
        route: '/users',
        icon: <FiberManualRecordIcon sx={{
            color: theme => theme.palette.primary.main,
            marginLeft: '1rem',
            paddingRight: '-1rem',
            fontSize: '0.7rem'
        }}/>
    },
    {
        name: 'Roles',
        route: '/roles',
        icon: <FiberManualRecordIcon sx={{
            color: theme => theme.palette.primary.main,
            marginLeft: '1rem',
            paddingRight: '-1rem',
            fontSize: '0.7rem'
        }}/>
    },
]