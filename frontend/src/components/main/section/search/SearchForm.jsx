import {useContext} from "react";
import {SearchFields} from "../../../../utils/SearchData.js";
import {SearchData} from "../../../../utils/SearchData.js";
import {useForm} from 'react-hook-form';
//import {yupResolver} from "@hookform/resolvers/yup";
import {Context} from "../../../../api/store/storeContext.js";

const SearchForm = () => {
    const {store} = useContext(Context);
    const topFields = SearchFields.slice(0, 3);
    const bottomFields = SearchFields.slice(3);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm({
        //resolver: yupResolver(schemaLogin),
        mode: 'onChange',
    });

    const submitForm = async () => {
        await store.search(SearchData);

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
                            className="search__input"
                            id={field.id}
                            type="text"
                            name={field.name}
                            placeholder={field.placeholder}
                        />
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
                            className="search__input"
                            id={field.id}
                            type="text"
                            name={field.name}
                            placeholder={field.placeholder}
                        />
                    </div>
                ))}
            </div>

            <button type="submit" className="search__btn">
                Найти игрока
            </button>
        </form>
    );
};

export default SearchForm;