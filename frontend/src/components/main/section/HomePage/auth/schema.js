import * as yup from 'yup';

const regExpEmail = /^\S+@\S+\.\S+$/;

export const schema = yup.object().shape({
    email: yup
        .string()
        .required('Обязательное поле')
        .matches(regExpEmail, 'Неверный формат почты'),
    password: yup
        .string()
        .required('Обязательное поле')
        .min(6, 'Необходимо минимум 6 символов'),
});