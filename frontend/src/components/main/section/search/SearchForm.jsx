import React, { useState, useCallback } from "react";
import axios from "axios";
import CountrySelect from "@/components/main/section/search/CountrySelect";

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
        if (!formData.name.trim()) newErrors.name = true;
        //if (!formData.Email || !/\S+@\S+\.\S+/.test(formData.Email)) newErrors.Email = true;
        //if (!formData.phonenumber || formData.phonenumber.length < 10) newErrors.phonenumber = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [formData, fields]);

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
            </div>
        ),
        [errors, formData, handleChange]
    );

    return (
        <form className="search__wrapper" autoComplete="off" onSubmit={handleSubmit}>
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