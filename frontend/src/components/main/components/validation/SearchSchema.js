import * as yup from 'yup';

export const SearchSchema = yup.object().shape({
    last_name: yup.string(),
    first_name: yup.string(),
    middle_name: yup.string(),
    discord: yup.string(),
    Email: yup.string().email('Неверный email'),
    nickname: yup.string(),
}).test(
    'at-least-one',
    'Заполните хотя бы одно из полей: Фамилия, Discord или Ник в руме',
    (values) => {
        return (
            values.last_name ||
            values.discord ||
            values.nickname
        );
    }
);