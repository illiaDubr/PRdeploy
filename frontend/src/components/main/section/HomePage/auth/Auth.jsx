import React, { useContext, useState } from 'react';
import { Modal, useModal } from "../../../components/Modal.jsx";
import IconSvg from "../../../components/IconSvg.jsx";
import Login from "./Login.jsx";
import { Context } from "../../../../../api/store/storeContext.js";
import TwoFA from "./TwoFA.jsx";

function Auth() {
    const {store} = useContext(Context);

    const {button: loginButton, modal: LoginModal} = Login();
    const {openModal, closeAllModals} = useModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const openFirstModal = () => {
        openModal("FirstModal");
    }

    const handleSubmit = async () => {
        try {
            const user = await store.registration(email, password, confirmPassword);
            openModal("TwoFA");
        } catch (error) {
            // Обработать ошибку, если нужно
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
                <form method="POST" className="modal__body" autoComplete="off">
                    <div className="modal__input-box">
                        <label htmlFor="email" className="label">
                            Почта
                        </label>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            className="input"
                            id="email"
                            type="email"
                            placeholder="Введите почту"
                        />
                    </div>
                    <div className="modal__input-box">
                        <label htmlFor="password" className="label">
                            Пароль
                        </label>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            className="input"
                            id="password"
                            type="password"
                            placeholder="Пароль"/>
                    </div>
                    <div className="modal__input-box">
                        <label htmlFor="password_confirmation" className="label">
                            Повторите пароль
                        </label>
                        <input
                            onChange={e => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            className="input"
                            id="password_confirmation"
                            type="password"
                            placeholder="Пароль"/>
                    </div>
                    <p className="modal__text">
                        У вас уже есть аккаунт? {loginButton}
                    </p>
                    <button className="modal__form-btn" type="submit"
                            onClick={handleSubmit}>
                        Зарегистрироваться
                    </button>
                </form>
            </Modal>
            {LoginModal}

            <TwoFA />
        </>
    )
}

export default Auth