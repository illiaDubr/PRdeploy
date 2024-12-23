import React from "react";
import {SearchFields} from "../../../../utils/SearchData.js";
import {SearchData} from "../../../../utils/SearchData.js";
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import {Context} from "../../../../api/store/storeContext.js";
import CountrySelect from "./CountrySelect.jsx";
import {SearchSchema} from "../../components/validation/SearchSchema.js";

const SearchForm = () => {
    const {store} = React.useContext(Context);
    const [formData, setFormData] = React.useState(SearchData);
    const topFields = SearchFields.slice(0, 3);
    const bottomFields = SearchFields.slice(3);

    const handlePhoneNumberChange = React.useCallback((phoneNumber) => {
        setFormData((prevData) => ({...prevData, phonenumber: phoneNumber}));
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm({
        resolver: yupResolver(SearchSchema),
        mode: 'onChange',
    });

    const submitForm = async () => {
        await store.search(SearchData);
        console.log(formData);
    }

    return (
        <form method="POST" className="search__wrapper" autoComplete="off" onSubmit={handleSubmit(submitForm)}>
            <div className="search__box">
                {topFields.map((field) => (
                    <div className="search" key={field.name}>
                        <label className="search__label" htmlFor={field.id}>
                            {field.label}
                        </label>
                        <input
                            onChange={handleChange}
                            value={formData[field.name] || ''}
                            {...register(field.name)}
                            className="search__input"
                            id={field.id}
                            type="text"
                            name={field.name}
                            placeholder={field.placeholder}
                        />
                        {errors[field.name] && (
                            <span className="search__error-message" aria-live="polite">
                                {errors[field.name].message}
                            </span>
                        )}
                    </div>
                ))}
            </div>
            <div className="search__box-bottom">
                {bottomFields.map((field) => (
                    <div className="search" key={field.name}>
                        <label className="search__label" htmlFor={field.id}>
                            {field.label}
                        </label>
                        <input
                            onChange={handleChange}
                            value={formData[field.name] || ''}
                            {...register(field.name)}
                            className="search__input"
                            id={field.id}
                            type="text"
                            name={field.name}
                            placeholder={field.placeholder}
                        />
                    </div>
                ))}
                <CountrySelect onPhoneNumberChange={handlePhoneNumberChange}/>
            </div>

            <button type="submit" className="search__btn">
                Найти игрока
            </button>
        </form>
    );
};

export default SearchForm;