import * as React from 'react'
import { validateItem } from './taxpayerValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import { useParams } from 'react-router-dom'
import TextInput from '../../components/TextInput'
import { useNavigate } from 'react-router-dom'
import axios from '../../api'

const TaxpayerEdit = props => {
    const { id } = useParams();
    const [loading, setLoading] = React.useState(false)
    const [loaded, setLoaded] = React.useState(false)
    const [record, setRecord] = React.useState(null)
    const navigate = useNavigate()

    const save = React.useCallback(async (values) => {
        setLoading(true)
        try {
            const { data } = await axios.put(`/taxpayers/${id}`, values)

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
        const { data } = await axios.get(`/taxpayers/${id}`);

        setRecord(data);
    }, []);

    React.useEffect(() => {
        if (loaded) {
            navigate('/taxpayers')
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
            title="Editar Rubro"
        >
            <InputContainer label='RIF'>
                <TextInput
                    name="rif"
                    placeholder="RIF"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Razón social'>
                <TextInput
                    name="name"
                    placeholder="Razón Social"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Dirección'>
                <TextInput
                    name="address"
                    placeholder="Dirección"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Teléfono'>
                <TextInput
                    name="phone"
                    placeholder="Teléfono"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Correo electrónico'>
                <TextInput
                    name="email"
                    placeholder="email@ejemplo.com"
                    fullWidth
                />
            </InputContainer>
        </BaseForm>
    )
}

export default TaxpayerEdit
