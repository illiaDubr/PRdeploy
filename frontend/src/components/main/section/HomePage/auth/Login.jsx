import {Modal, useModal} from "../../../components/Modal.jsx";
import IconSvg from "../../../components/IconSvg.jsx";
import NewPassword from "./NewPassword.jsx";

function Login() {
    const {openModal, goBack, closeAllModals} = useModal();
    const { button: newPasswordButton, modal: newPasswordModal } = NewPassword();

    const openLogin = () => {
        openModal("Login");
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
                    <form typeof="POST" className="modal__body" autoComplete="off">
                        <div className="modal__input-box">
                            <label htmlFor="email" className="label">
                                Почта
                            </label>
                            <input className="input" id="email" type="email" placeholder="Введите почту"/>
                        </div>
                        <div className="modal__input-box">
                            <label htmlFor="password" className="label">
                                Пароль
                            </label>
                            <input className="input" id="password" type="password" placeholder="Пароль"/>
                        </div>
                        <p className="modal__text">
                            Забыли пароль? {newPasswordButton}
                        </p>
                        <button className="modal__form-btn" type="submit">
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