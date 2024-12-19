import { useContext, useState } from 'react';
import { Modal, useModal } from "../../../components/Modal.jsx";
import IconSvg from "../../../components/IconSvg.jsx";
import { Context } from "../../../../../api/store/storeContext.js";

function Auth() {
    const { store } = useContext(Context);

    const { openModal, closeAllModals } = useModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const openFirstModal = () => {
        openModal("FirstModal");
    }

    const handleSubmit = async (e) => {
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
                <form method="POST" className="modal__body" autoComplete="off" onSubmit={handleSubmit}>
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
                        {store.errors.registration.email && (
                            <span className="error">{store.errors.registration.email}</span>
                        )}
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