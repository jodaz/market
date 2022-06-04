import * as React from 'react'
import { validateItem } from './itemValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import axios from '../../api'
import { useNavigate } from 'react-router-dom'

const TaxpayerCreate = () => {
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
            <InputContainer label='Nombre'>
                <TextInput
                    name="name"
                    placeholder="Nombre"
                    fullWidth
                />
            </InputContainer>
        </BaseForm>
    )
}

export default TaxpayerCreate
