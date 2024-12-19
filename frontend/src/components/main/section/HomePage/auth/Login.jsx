import React, { useContext, useState } from 'react';
import {useNavigate} from "react-router-dom";
import {Modal, useModal} from "../../../components/Modal.jsx";
import IconSvg from "../../../components/IconSvg.jsx";
import NewPassword from "./NewPassword.jsx";
import { Context } from "../../../../../api/store/storeContext.js";
import {ACCOUNT_ROUTE} from "../../../../../utils/const.js";

function Login() {
    const navigate = useNavigate();

    const {openModal, closeAllModals} = useModal();
    const { button: newPasswordButton, modal: newPasswordModal } = NewPassword();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);

    const openLogin = () => {
        openModal("Login");
    }

    const handleSubmit = async () => {
        await store.login(email, password);
        navigate(ACCOUNT_ROUTE);
    }

    const LoginButton = (
        <button className="modal__link" type="button" onClick={openLogin}>
            Войти
        </button>
    );

    return {
        button: LoginButton,
        modal: (
            <>
                <Modal modalName="Login">
                    <div className="modal__title">
                        Вход
                        <button className="modal__btn" type="button" onClick={closeAllModals}>
                            <IconSvg width="36" height="36" id="close-menu"/>
                        </button>
                    </div>
                    <form method="POST" className="modal__body" autoComplete="off">
                        <div className="modal__input-box">
                            <label htmlFor="loginEmail" className="label">
                                Почта
                            </label>
                            <input
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                className="input"
                                id="loginEmail"
                                type="email"
                                placeholder="Введите почту"
                            />
                        </div>
                        <div className="modal__input-box">
                            <label htmlFor="loginPassword" className="label">
                                Пароль
                            </label>
                            <input
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                className="input"
                                id="loginPassword"
                                type="password"
                                placeholder="Пароль"
                            />
                        </div>
                        <p className="modal__text">
                            Забыли пароль? {newPasswordButton}
                        </p>
                        <button className="modal__form-btn" type="submit" onClick={handleSubmit}>
                            Войти
                        </button>
                    </form>
                </Modal>
                {newPasswordModal}
            </>
        )
    }
}

export default Login