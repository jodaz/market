export const validateItem = (values) => {
    const errors = {};

    if (!values.names) {
        errors.names = "Ingrese el nombre de la persona.";
    }
    if (!values.surnames) {
        errors.surnames = "Ingrese el apellido.";
    }

    return errors;
};
