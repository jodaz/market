import * as React from 'react'
import { validateItem } from './taxpayerValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import axios from '../../api'
import { useNavigate } from 'react-router-dom'

const normalizePhone = value => {
    if (!value) return value;

    const onlyNums = value.replace(/[^\d]/g, "");
    if (onlyNums.length <= 3) return onlyNums;
    if (onlyNums.length <= 7)
        return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 7)}`;
        
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6,10)}`;
};

const normalizeRif = value => {
    let letter = 'J-';
    if (!value) return letter;

    value = value.toUpperCase();

    if (value.length <= 2) {
        if (value[0] === 'J' || value[0] === 'V' 
            || value[0] === 'G' || value[0] === 'E')
        {
            letter = `${value[0]}-`
        }

        return letter;
    }

    const nValue = value.slice(2, 12).replace(/[^\d]/g, "");

    if (value.length <= 2) return `${letter}${nValue}`;
    if (value.length <= 10) {
        return `${letter}${nValue}`
    }
    return `${letter}${nValue.slice(0, 8)}-${nValue.slice(8, 12)}`;
}

const TaxpayerCreate = () => {
    const [loaded, setLoaded] = React.useState(false)
    const navigate = useNavigate()

    const save = React.useCallback(async (values) => {
        try {
            const { data } = await axios.post('/taxpayers', values)

            if (data) {
                setLoaded(true)
            }
        } catch (error) {
            if (error.response.data.errors) {
                return error.response.data.errors;
            }
        }
    }, [])

    React.useEffect(() => {
        if (loaded) {
            navigate('/taxpayers')
        }
    }, [loaded])

    return (
        <BaseForm
            save={save}
            validate={validateItem}
            title='Agregar contribuyente'
            unresponsive
        >
            <InputContainer label='RIF'>
                <TextInput
                    name="rif"
                    parse={normalizeRif}
                    placeholder="R-12345678-9"
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
                    parse={normalizePhone}
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

export default TaxpayerCreate
