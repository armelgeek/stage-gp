export const is = {
    match: (testFn, message = '') => (value, fieldValues) => !testFn(value, fieldValues) && message,

    required: () => value => isNilOrEmptyString(value) && 'Le champ est requis',

    minLength: min => value => !!value && value.length < min && `Doit avoir au minimuim ${min} caracteres`,

    maxLength: max => value => !!value && value.length > max && `Doit avoir au maximuim  ${max} caracteres`,

    notEmptyArray: () => value =>
        Array.isArray(value) && value.length === 0 && 'Please add at least one item',

    email: () => value => !!value && !/.+@.+\..+/.test(value) && 'Doit être un email valide',

    url: () => value =>
        !!value &&
        // eslint-disable-next-line no-useless-escape
        !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(value) &&
        'Must be a valid URL',
};

const isNilOrEmptyString = value => value === undefined || value === null || value === '';

export const generateErrors = (fieldValues, fieldValidators) => {
    const errors = {};

    Object.entries(fieldValidators).forEach(([fieldName, validators]) => {
        [validators].flat().forEach(validator => {
            const errorMessage = validator(fieldValues[fieldName], fieldValues);
            if (errorMessage && !errors[fieldName]) {
                errors[fieldName] = errorMessage;
            }
        });
    });
    return errors;
};