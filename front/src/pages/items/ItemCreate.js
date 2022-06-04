import * as React from 'react'
import { validateItem } from './itemValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import axios from '../../api'
import { useNavigate } from 'react-router-dom'

const ItemCreate = props => {
    const [loading, setLoading] = React.useState(false)
    const [loaded, setLoaded] = React.useState(false)
    const navigate = useNavigate()

    const save = React.useCallback(async (values) => {
        setLoading(true)

        try {
            const { data } = await axios.post('/items', values)

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
            navigate('/items')
        }
    }, [loaded])

    return (
        <BaseForm
            save={save}
            validate={validateItem}
            loading={loading}
            title='Agregar rubro'
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

ItemCreate.defaultProps = {
    basePath: 'items',
    resource: 'items'
}

export default ItemCreate
