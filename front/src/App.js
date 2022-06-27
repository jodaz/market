import './App.css';
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import { AdminProvider } from './context/AdminContext'
import { AuthProvider } from './context/AuthContext'
import { SnackbarProvider } from 'notistack';
import { ConfirmProvider } from 'material-ui-confirm';
import theme from './theme'
import Layout from './layout'
// Pages
import ItemsList from './pages/items/ItemList'
import ItemEdit from './pages/items/ItemEdit'
import ItemCreate from './pages/items/ItemCreate'
import UserList from './pages/users/UserList'
import UserCreate from './pages/users/UserCreate'
import UserEdit from './pages/users/UserEdit'
import CubicleList from './pages/cubicles/CubicleList'
import CubicleCreate from './pages/cubicles/CubicleCreate'
import Dashboard from './pages/dashboard'
import Login from './pages/auth/Login'
import TaxpayerList from './pages/taxpayers/TaxpayerList'
import TaxpayerCreate from './pages/taxpayers/TaxpayerCreate'
import TaxpayerEdit from './pages/taxpayers/TaxpayerEdit'
import TaxpayerShow from './pages/taxpayers/TaxpayerShow'
import RoleList from './pages/roles/RoleList'
import RoleCreate from './pages/roles/RoleCreate'
import RoleEdit from './pages/roles/RoleEdit'
import Security from './pages/account/Security';
import NotFound from './pages/404';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ConfirmProvider>
                <SnackbarProvider maxSnack={3}>
                    <AdminProvider>
                        <AuthProvider>
                            <Routes>
                                <Route path='*' element={<NotFound />} />
                                
                                <Route path='/login' element={<Login />} />
                                <Route
                                    path="/"
                                    element={
                                        <Layout authorize='admin,user'>
                                            <Dashboard />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/cubicles"
                                    element={
                                        <Layout authorize='admin,user'>
                                            <CubicleList />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/cubicles/:id/create"
                                    element={
                                        <Layout authorize='admin,user'>
                                            <CubicleCreate />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/items"
                                    element={
                                        <Layout authorize='admin,user'>
                                            <ItemsList />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/taxpayers"
                                    element={
                                        <Layout authorize='admin,user'>
                                            <TaxpayerList />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/taxpayers/:id"
                                    element={
                                        <Layout authorize='admin,user'>
                                            <TaxpayerShow />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/taxpayers/:id/edit"
                                    element={
                                        <Layout authorize='admin,user'>
                                            <TaxpayerEdit />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/taxpayers/create"
                                    element={
                                        <Layout authorize='admin,user'>
                                            <TaxpayerCreate />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/roles"
                                    element={
                                        <Layout authorize='admin'>
                                            <RoleList />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/roles/:id/edit"
                                    element={
                                        <Layout authorize='admin'>
                                            <RoleEdit />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/roles/create"
                                    element={
                                        <Layout authorize='admin'>
                                            <RoleCreate />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/users"
                                    element={
                                        <Layout authorize='admin'>
                                            <UserList />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/users/:id/edit"
                                    element={
                                        <Layout authorize='admin'>
                                            <UserEdit />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/users/create"
                                    element={
                                        <Layout authorize='admin'>
                                            <UserCreate />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/items/:id/edit"
                                    element={
                                        <Layout authorize='admin,user'>
                                            <ItemEdit />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/items/create"
                                    element={
                                        <Layout authorize='admin,user'>
                                            <ItemCreate />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/security"
                                    element={
                                        <Layout authorize='admin,user'>
                                            <Security />
                                        </Layout>
                                    }
                                />
                            </Routes>
                        </AuthProvider>
                    </AdminProvider>
                </SnackbarProvider>
            </ConfirmProvider>
        </ThemeProvider>
    );
}

export default App;
