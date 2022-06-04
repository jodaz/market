import * as React from 'react'
import { validateItem } from './userValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import PasswordInput from '../../components/PasswordInput'
import TextInput from '../../components/TextInput'
import axios from '../../api'
import { useNavigate } from 'react-router-dom'

const UserCreate = () => {
    const [loading, setLoading] = React.useState(false)
    const [loaded, setLoaded] = React.useState(false)
    const navigate = useNavigate()

    const save = React.useCallback(async (values) => {
        setLoading(true)

        try {
            const { data } = await axios.post('/users', values)

            if (data) {
                setLoaded(true)
            }
        } catch (error) {
            if (error.response.data.errors) {
                return error.response.data.errors;
            }
        }

        setLoading(false)
    }, [])

    React.useEffect(() => {
        if (loaded) {
            navigate('/users')
        }
    }, [loaded])

    return (
        <BaseForm
            save={save}
            validate={validateItem}
            loading={loading}
            title='Agregar usuario'
            unresponsive
        >
            <InputContainer label='Cédula de identidad'>
                <TextInput
                    name="identity_card"
                    placeholder="Cédula de identidad"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Nombre(s)'>
                <TextInput
                    name="names"
                    placeholder="Nombre"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Apellido(s)'>
                <TextInput
                    name="surnames"
                    placeholder="Apellido(s)"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Login'>
                <TextInput
                    name="login"
                    placeholder="Nombre de usuario"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Contraseña'>
                <PasswordInput
                    name="password"
                    placeholder="Contraseña"
                    fullWidth
                />
            </InputContainer>
        </BaseForm>
    )
}

export default UserCreate
