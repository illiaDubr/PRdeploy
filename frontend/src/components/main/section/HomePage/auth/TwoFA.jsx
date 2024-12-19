import {Modal, useModal} from "../../../components/Modal.jsx";
import IconSvg from "../../../components/IconSvg.jsx";
import { Context } from "../../../../../api/store/storeContext.js";
import {useContext, useState} from "react";

const TwoFA = () => {
    const {store} = useContext(Context);

    const [password, setPassword] = useState('');

    const {closeAllModals} = useModal();

    return (
        <Modal modalName="TwoFA">
            <div className="modal__title">
                Подтвердите свою почту
                <button className="modal__btn" type="button" onClick={closeAllModals}>
                    <IconSvg width="36" height="36" id="close-menu"/>
                </button>
            </div>
            <form method="POST" className="modal__body" autoComplete="off">
                <p className="modal__text">
                    На ваш электронный адрес  был отправлен код. Введите его, чтобы продолжить пользоваться платформой
                </p>
                <div className="modal__input-box">
                    <label htmlFor="2FA" className="label">
                        Код двухфакторной аутентификации
                    </label>
                    <input
                        className="input"
                        id="2FA"
                        type="text"
                        placeholder="Введите код"
                    />
                </div>
                <button className="modal__form-btn" type="submit" onClick={() => store.verification( password )}>
                    Подтвердить почту
                </button>
            </form>
        </Modal>
    )
}

export default TwoFA