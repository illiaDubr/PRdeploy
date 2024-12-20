import {useContext, useState} from 'react';
import {Modal, useModal} from "../../../components/Modal.jsx";
import IconSvg from "../../../components/IconSvg.jsx";
import {Context} from "../../../../../api/store/storeContext.js";
import { useForm, Controller } from 'react-hook-form';
import {schema} from "./schema.js";
import {yupResolver} from "@hookform/resolvers/yup";

function Auth() {
    const {store} = useContext(Context);

    const {openModal, closeAllModals} = useModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const openFirstModal = () => {
        openModal("FirstModal");
    }

    const submitForm = async (e) => {
        try {
            await store.registration(email, password, confirmPassword, e);
            await store.verification(email);
            closeAllModals();
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
        }
    }

    return (
        <>
            <button type="button" onClick={openFirstModal} className="temporary">
                Регистрация
            </button>

            <Modal modalName="FirstModal">
                <div className="modal__title">
                    Регистрация
                    <button className="modal__btn" type="button" onClick={closeAllModals}>
                        <IconSvg width="36" height="36" id="close-menu"/>
                    </button>
                </div>
                <form method="POST" className="modal__body" onSubmit={handleSubmit(submitForm)}>
                    <div className="modal__input-box">
                        <label htmlFor="email" className="label">
                            Почта
                        </label>
                        <input
                            {...register('email')}
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            className="input"
                            id="email"
                            type="email"
                            placeholder="Введите почту"
                            required={true}
                            autoComplete="email"
                        />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className="modal__input-box">
                        <label htmlFor="password" className="label">
                            Пароль
                        </label>
                        <input
                            {...register('password')}
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            className="input"
                            id="password"
                            type="password"
                            placeholder="Пароль"
                            required={true}
                            autoComplete="new-password"
                        />
                        <p>{errors.password?.message}</p>
                    </div>
                    <div className="modal__input-box">
                        <label htmlFor="password_confirmation" className="label">
                            Повторите пароль
                        </label>
                        <input
                            {...register('password')}
                            onChange={e => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            className="input"
                            id="password_confirmation"
                            type="password"
                            placeholder="Пароль"
                            required={true}
                            autoComplete="new-password"
                        />
                        <p>{errors.password?.message}</p>
                    </div>
                    <p className="modal__text">
                        У вас уже есть аккаунт?
                    </p>
                    <button className="modal__form-btn" type="submit">
                        Зарегистрироваться
                    </button>
                </form>
            </Modal>
        </>
    )
}

export default Auth