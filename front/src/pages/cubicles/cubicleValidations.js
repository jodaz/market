export const validateItem = (values) => {
    const errors = {};

    if (!values.item_id) {
        errors.item_id = "Seleccione un rubro.";
    }
    if (!values.cubicles.filter(item => item != undefined && item.address).length) {
        errors.cubicles_field = 'Ingrese al menos un cubículo.'
    }
    
    return errors;
};
