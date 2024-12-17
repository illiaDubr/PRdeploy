import React, { useContext, useState } from 'react';
import { Modal, useModal } from "../../../components/Modal.jsx";
import IconSvg from "../../../components/IconSvg.jsx";
import Login from "./Login.jsx";
import { Context } from "../../../../../api/store/storeContext.js";

function Auth() {
    const {button: loginButton, modal: LoginModal} = Login();
    const {openModal, closeAllModals} = useModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);

    const openFirstModal = () => {
        openModal("FirstModal");
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
                <form typeof="POST" className="modal__body" autoComplete="off">
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
                    <p className="modal__text">
                        У вас уже есть аккаунт? {/*{loginButton}*/}
                    </p>
                    <button className="modal__form-btn" type="submit"
                            onClick={() => store.registration(email, password)}>
                        Зарегистрироваться
                    </button>
                </form>
            </Modal>
            {/*{LoginModal}*/}
        </>
    )
}

export default Auth