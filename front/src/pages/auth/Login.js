import * as React from 'react';
import { Form } from 'react-final-form';
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import TextInput from '../../components/TextInput'
import PasswordInput from '../../components/PasswordInput'
import InputContainer from '../../components/InputContainer'
import axios from '../../api'
import { Link, useNavigate } from 'react-router-dom'

const validate = (values) => {
    const errors = {};

    if (!values.login) {
        errors.login = 'Ingrese su nombre de usuario';
    }

    if (!values.password) {
        errors.password = 'Ingrese su contraseña';
    }

    return errors;
};

const Login = () => {
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const handleSubmit = React.useCallback(async (values) => {
        setLoading(true)

        return await axios.post(`${process.env.REACT_APP_API_DOMAIN}/login`, values)
            .then(async (res) => {
                await axios.get('/csrf-cookie')
                await navigate('/', { replace: true });

                setLoading(false);
            }).catch(err => {
                setLoading(false);

                if (err.response.status == 500) {
                    navigate('/error', { replace: true });
                }

                if (err.response.data.errors) {
                    return err.response.data.errors;
                }
            });
    }, [])

    return (
        <Box component='div'>
            <Form
                onSubmit={handleSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Card>
                            <div>
                                <InputContainer label='Correo electrónico' md={12}>
                                    <TextInput
                                        name="login"
                                        placeholder="Ingrese su nombre de usuario"
                                        disabled={loading}
                                        fullWidth
                                    />
                                </InputContainer>
                                <InputContainer label='Contraseña' md={12}>
                                    <PasswordInput
                                        name="password"
                                        placeholder="Ingrese su contraseña"
                                        disabled={loading}
                                        fullWidth
                                    />
                                </InputContainer>
                                <CardActions>
                                    <Button disabled={loading} unresponsive fullWidth onSubmit={handleSubmit}>
                                        Iniciar sesión
                                    </Button>
                                </CardActions>
                            </div>
                        </Card>
                    </form>
                )}
            />
        </Box>
    );
};

export default Login;
