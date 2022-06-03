import * as React from 'react'
import { validateItem } from './itemValidations';
import BaseForm from '../components/BaseForm'
import InputContainer from '../components/InputContainer'
import { useParams } from 'react-router-dom'
import TextInput from '../components/TextInput'
import { useNavigate } from 'react-router-dom'
import axios from '../api'

const ItemEdit = props => {
    const { id } = useParams();
    const [loading, setLoading] = React.useState(false)
    const [loaded, setLoaded] = React.useState(false)
    const [record, setRecord] = React.useState(null)
    const navigate = useNavigate()

    const save = React.useCallback(async (values) => {
        setLoading(true)
        try {
            const { data } = await axios.put(`/items/${id}`, values)

            if (data) {
                setLoaded(true)
            }
        } catch (error) {
            if (error.response.data.errors) {
                return error.response.data.errors;
            }
        }
        setLoading(false)
    }, [id])


    const fetchRecord = React.useCallback(async () => {
        const { data } = await axios.get(`/items/${id}`);

        setRecord(data);
    }, []);

    React.useEffect(() => {
        if (loaded) {
            navigate('/items')
        }
    }, [loaded])

    React.useEffect(() => {
        fetchRecord()
    }, [])

    return (
        <BaseForm
            save={save}
            validate={validateItem}
            record={record}
            saveButtonLabel='Actualizar'
            loading={loading}
            formName="Editar Rubro"
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

ItemEdit.defaultProps = {
    basePath: 'items',
    resource: 'items'
}

export default ItemEdit
