import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './auth/Login'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import Layout from './layout'
import Dashboard from './dashboard'

// Pages
import ItemsList from './items/ItemList'
import ItemEdit from './items/ItemEdit'
import ItemCreate from './items/ItemCreate'
import TaxpayerList from './taxpayers/TaxpayerList'

function App() {
    return (
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
                    path="/"
                    element={
                        <Layout>
                            <Dashboard />
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
    );
}

export default App;
