import './App.css';
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import Layout from './layout'
// Pages
import ItemsList from './pages/items/ItemList'
import ItemEdit from './pages/items/ItemEdit'
import ItemCreate from './pages/items/ItemCreate'
import TaxpayerList from './pages/taxpayers/TaxpayerList'
import UserList from './pages/users/UserList'
import UserCreate from './pages/users/UserCreate'
import UserEdit from './pages/users/UserEdit'
import CubicleList from './pages/cubicles/CubicleList'
import Dashboard from './pages/dashboard'
import Login from './pages/auth/Login'
import TaxpayerCreate from './pages/taxpayers/TaxpayerCreate'
import TaxpayerEdit from './pages/taxpayers/TaxpayerEdit'
import { AdminProvider } from './context/AdminContext'

function App() {
    return (
        <AdminProvider>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <Dashboard />
                            </Layout>
                        }
                    />
                    <Route
                        path="/cubicles"
                        element={
                            <Layout>
                                <CubicleList />
                            </Layout>
                        }
                    />
                    <Route
                        path="/items"
                        element={
                            <Layout>
                                <ItemsList />
                            </Layout>
                        }
                    />
                    <Route
                        path="/taxpayers"
                        element={
                            <Layout>
                                <TaxpayerList />
                            </Layout>
                        }
                    />
                    <Route
                        path="/taxpayers/:id/edit"
                        element={
                            <Layout>
                                <TaxpayerEdit />
                            </Layout>
                        }
                    />
                    <Route
                        path="/taxpayers/create"
                        element={
                            <Layout>
                                <TaxpayerCreate />
                            </Layout>
                        }
                    />
                    <Route
                        path="/users"
                        element={
                            <Layout>
                                <UserList />
                            </Layout>
                        }
                    />
                    <Route
                        path="/users/:id/edit"
                        element={
                            <Layout>
                                <UserEdit />
                            </Layout>
                        }
                    />
                    <Route
                        path="/users/create"
                        element={
                            <Layout>
                                <UserCreate />
                            </Layout>
                        }
                    />
                    <Route
                        path="/items/:id/edit"
                        element={
                            <Layout>
                                <ItemEdit />
                            </Layout>
                        }
                    />
                    <Route
                        path="/items/create"
                        element={
                            <Layout>
                                <ItemCreate />
                            </Layout>
                        }
                    />
                </Routes>
            </ThemeProvider>
        </AdminProvider>
    );
}

export default App;
