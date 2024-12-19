import { useState, useCallback } from "react";
import axios from "axios";
import CountrySelect from "./CountrySelect.jsx";

const SearchForm = ({ setSearchResults, setIsLoading }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        surname: "",
        name: "",
        middle_name: "",
        discord: "",
        Email: "",
        nickname: "",
        phonenumber: "",
    });

    const fields = [
        { label: "Фамилия", id: "surname", name: "surname", placeholder: "Введите фамилию" },
        { label: "Имя", id: "name", name: "name", placeholder: "Введите имя" },
        { label: "Отчество", id: "middle_name", name: "middle_name", placeholder: "Введите отчество" },
        { label: "Discord", id: "discord", name: "discord", placeholder: "Введите ник игрока" },
        { label: "Почта", id: "Email", name: "Email", placeholder: "Введите почту игрока" },
        { label: "Ник в руме", id: "nickname", name: "nickname", placeholder: "Введите ник игрока" },
    ];

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: false,
        }));
    }, []);

    const handlePhoneNumberChange = useCallback((phoneNumber) => {
        setFormData((prevData) => ({ ...prevData, phonenumber: phoneNumber }));
        setErrors((prevErrors) => ({ ...prevErrors, phonenumber: false }));
    }, []);

    const validateFields = useCallback(() => {
        const newErrors = {};
        if (
            !formData.surname.trim() &&
            !formData.discord.trim() &&
            !formData.nickname.trim()
        ) {
            newErrors.surname = true;
            newErrors.discord = true;
            newErrors.nickname = true;
        }
        setErrors(newErrors);

        // Удаление ошибок через 3 секунды
        if (Object.keys(newErrors).length > 0) {
            setTimeout(() => {
                setErrors({});
            }, 3000);
        }

        return Object.keys(newErrors).length === 0;
    }, [formData]);

    const getErrorMessage = (fieldName) => {
        switch (fieldName) {
            case "surname":
                return "Фамилия обязательна, если другие поля пусты.";
            case "discord":
                return "Введите Discord, если другие поля пусты.";
            case "nickname":
                return "Ник в руме обязателен, если другие поля пусты.";
            default:
                return "Это поле обязательно.";
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateFields()) return;

        setIsSubmitting(true);
        setIsLoading(true);

        try {
            const response = await axios.post("http://135.181.84.236/api/search-players", formData);
            setSearchResults(response.data);
            console.log(formData.phonenumber);
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
        } finally {
            setTimeout(() => {
                setIsSubmitting(false);
                setIsLoading(false);
            }, 1500);
        }
    };

    const renderInput = useCallback(
        ({ label, id, name, placeholder }) => (
            <div className="search" key={name}>
                <label className="search__label" htmlFor={id}>
                    {label}
                </label>
                <input
                    className={`search__input ${errors[name] ? "search__input-error" : ""}`}
                    id={id}
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={formData[name] || ""}
                    onChange={handleChange}
                />
                {errors[name] && (
                    <span className="search__error-message" aria-live="polite">
                        {getErrorMessage(name)}
                    </span>
                )}
            </div>
        ),
        [errors, formData, handleChange]
    );

    return (
        <form method="POST" className="search__wrapper" autoComplete="off" onSubmit={handleSubmit}>
            <div className="search__box">
                {fields.slice(0, 3).map(renderInput)}
            </div>
            <div className="search__box-bottom">
                {fields.slice(3).map(renderInput)}
                <CountrySelect onPhoneNumberChange={handlePhoneNumberChange} />
            </div>
            <button type="submit" className="search__btn" disabled={isSubmitting}>
                {isSubmitting ? "Идет поиск..." : "Найти игрока"}
            </button>
        </form>
    );
};

export default SearchForm;