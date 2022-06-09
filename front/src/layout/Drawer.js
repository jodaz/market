import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { routes, adminRoutes } from '../routes'
import ListItemLink from '../components/ListItemLink';
import Submenu from '../components/Submenu';
import { useAdmin } from '../context/AdminContext'
import AccountMenu from './AccountMenu'
import LogoutButton from '../components/LogoutButton';
import PeopleIcon from '@mui/icons-material/People';

const drawerWidth = 240;

function ResponsiveDrawer() {
    const [state, setState] = React.useState({
        administration: false
    });
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { state: AdminState } = useAdmin()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleToggle = menu => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {routes.map((route, index) => (
                    <ListItemLink
                        primary={route.name}
                        to={route.route}
                        icon={route.icon}
                        key={index}
                    />
                ))}
                <Submenu
                    handleToggle={() => handleToggle('administration')}
                    isOpen={state.administration}
                    sidebarIsOpen={true}
                    name='Administración'
                    icon={<PeopleIcon />}
                >
                    {adminRoutes.map((route, index) => (
                        <ListItemLink
                            primary={route.name}
                            to={route.route}
                            icon={route.icon}
                            key={index}
                        />
                    ))}
                </Submenu>
                <LogoutButton />
            </List>
            <Divider />
        </div>
    );

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {AdminState.title}
                    </Typography>
                    <Box flex='1' justifyContent='flex-end' display='flex'>
                        <AccountMenu />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
}

export default ResponsiveDrawer;
