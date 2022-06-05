import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Form } from 'react-final-form'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import merge from 'lodash/merge';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AdminContext } from '../context/AdminContext'

const getFormInitialValues = (
    initialValues,
    defaultValue,
    record
) => {
    if (typeof defaultValue !== 'undefined') {
        console.warn(
            '"defaultValue" is deprecated, please use "initialValues" instead'
        );
    }

    const finalInitialValues = merge(
        {},
        getValues(defaultValue, record),
        getValues(initialValues, record),
        record
    );
    return finalInitialValues;
}

function getValues(values, record) {
    if (typeof values === 'object') {
        return values;
    }

    if (typeof values === 'function') {
        return values(record);
    }

    return {};
}

const BaseForm = ({
    children,
    saveButtonLabel,
    loading,
    noButton,
    unresponsive,
    validate,
    save,
    record,
    initialValues,
    defaultValue,
    title,
    ...rest
}) => {
    const { dispatch } = React.useContext(AdminContext)
    const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const finalInitialValues = React.useMemo(
        () => getFormInitialValues(initialValues, defaultValue, record),
        [JSON.stringify({ initialValues, defaultValue, record })] // eslint-disable-line
    );
    React.useEffect(() => {
        dispatch({ type: 'SET_TITLE', payload: title })
    }, [title])

    return (
        <Box component='div' width='100%'>
            <Box component='div' paddingTop='2rem'  width='100%'>
                <Form
                    onSubmit={save}
                    validate={validate}
                    initialValues={finalInitialValues}
                    {...rest}
                    render={ ({ handleSubmit, submitting }) => (
                        <form id="exampleForm" onSubmit={handleSubmit}>
                            <Box sx={{
                                maxWidth: '90rem',
                                backgroundColor: theme => theme.palette.secondary.main,
                                padding: '1rem 2rem'
                            }}>
                                <Grid container spacing={1}>
                                    {
                                        React.Children.map(children, child =>
                                            React.cloneElement(child, {
                                                disabled: loading || submitting
                                            })
                                        )
                                    }
                                    <Box sx={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'flex-end',
                                        padding: '1rem 0.5rem'
                                    }}>
                                        {!noButton && (
                                            <Button
                                                disabled={loading}
                                                onClick={event => {
                                                    if (event) {
                                                        event.preventDefault();
                                                        handleSubmit();
                                                    }
                                                }}
                                                type="submit"
                                                color='primary'
                                                variant="contained"
                                                fullWidth={matches}
                                            >
                                                {saveButtonLabel}
                                            </Button>
                                        )}
                                    </Box>
                                </Grid>
                            </Box>
                        </form>
                    )}
                />
            </Box>
        </Box>
    );
}

BaseForm.propTypes = {
    saveButtonLabel: PropTypes.string,
    disabled: PropTypes.bool
}

BaseForm.defaultProps = {
    saveButtonLabel: 'Guardar',
    disabled: false,
    noButton: false,
    unresponsive: false
}

export default BaseForm;
