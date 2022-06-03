import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

const routes = [
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
    },
    {
        name: 'Usuarios',
        route: '/users',
        icon: <GroupIcon />
    },
]

export default routes;