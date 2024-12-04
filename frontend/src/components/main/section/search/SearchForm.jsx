import React from "react";
import axios from "axios";

const SearchForm = () => {


    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const [formData, setFormData] = React.useState({
        surname: "",
        name: "",
        middle_name: "",
        discord: "",
        Email: "",
        nickname: "",
        phonenumber: "",
    });

    const fields = [
        {label: "Фамилия", name: "surname", type: "text", placeholder: "Введите фамилию"},
        {label: "Имя", name: "name", type: "text", placeholder: "Введите имя"},
        {label: "Отчество", name: "middle_name", type: "text", placeholder: "Введите отчество"},
        {label: "Discord", name: "discord", type: "text", placeholder: "Введите ник игрока"},
        {label: "Почта", name: "Email", type: "email", placeholder: "Введите почту игрока"},
        {label: "Ник в руме", name: "nickname", type: "text", placeholder: "Введите ник игрока"},
        {label: "номер", name: "phonenumber", type: "text", placeholder: "Введите ник игрока"},
    ];

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post("http://135.181.84.236/api/search-players", formData);
            console.log("Ответ от сервера:", response.data);
            console.log(formData);
            alert("Данные успешно отправлены!");
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
            console.log(formData);
            console.log("Ошибка при отправке данных. Проверьте соединение с сервером.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="search__wrapper" autoComplete="off" method="POST" onSubmit={handleSubmit}>
            <div className="search__box">
                {fields.slice(0, 3).map(({label, name, type = "text", placeholder}) => (
                    <div className="search" key={name}>
                        <label className="search__label" htmlFor={name}>
                            {label}
                        </label>
                        <input
                            className="search__input"
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={formData[name] || ""}
                            onChange={handleChange}
                        />
                    </div>
                ))}
            </div>


            <div className="search__box-bottom">
                {fields.slice(3).map(({label, name, type, placeholder}) => (
                    <div className="search" key={name}>
                        <label className="search__label" htmlFor={name}>
                            {label}
                        </label>
                        <input
                            className="search__input"
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={formData[name] || ""}
                            onChange={handleChange}
                        />
                    </div>
                ))}

            </div>
            <button type="submit" className="search__btn" disabled={isSubmitting}>
                {isSubmitting ? "Идет отправка..." : "Найти игрока"}
            </button>
        </form>
    );
}

export default SearchForm