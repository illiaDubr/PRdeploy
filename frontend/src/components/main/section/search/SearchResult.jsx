import React from "react";
import SearchLoader from "./SearchLoader.jsx";
import SearchWarning from "./SearchWarning.jsx";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../api/store/storeContext.js";
import IconSvg from "../../components/IconSvg.jsx";


const SearchResult = observer(() => {
    const {store} = React.useContext(Context);
    const {results, isLoading} = store;

    let content;

    if (isLoading) {
        content = <SearchLoader/>;
    } else if (!Array.isArray(results) || results.length === 0) {
        content = Array.isArray(results) && results.length === 0 ? (
            <SearchWarning id="notification">Для отображения результата поиска заполните поля</SearchWarning>
        ) : (
            <SearchWarning id="red_notification">Данные отсутствуют</SearchWarning>
        );
    } else {
        content = (
            <div className="">

            </div>
        );
    }

    return (
        <div className="result__container">
            {/*{content}*/}
            <div className="result__box">
                <div className="result result-left">
                    <div className="result__title">
                        Иванов Иван Иванович
                    </div>
                    <div className="result__info">
                        <div className="result__text result__text-1">
                            <div className="result__head">
                                <IconSvg width={20} height={20} id="search__phone"/>
                            </div>
                            +7 (777) 777-77-77
                        </div>
                        <div className="result__text result__text-2">
                            <div className="result__head">
                                <IconSvg width={20} height={20} id="search__mail"/>
                            </div>
                            ivanivanov@mail.ru
                        </div>
                        <div className="result__text result__text-3">
                            <div className="result__head">
                                <IconSvg width={20} height={20} id="search__discord"/>
                                Discord:
                            </div>
                            <p content="result__text-discord">
                                ivan1
                            </p>
                        </div>
                        <div className="result__text result__text-4">
                            <div className="result__head">
                                Pokerok:
                            </div>
                            <p content="result__text-discord">
                                noivan
                            </p>
                        </div>
                        <div className="result__text result__text-5">
                            <div className="result__head">
                                PS:
                            </div>
                            <p content="result__text-discord">
                                noivan1
                            </p>
                        </div>
                        <div className="result__text result__text-6">
                            <div className="result__head">
                                Winamax:
                            </div>
                            <p content="result__text-discord">
                                oivan
                            </p>
                        </div>
                    </div>
                </div>
                <div className="result result-right">
                    <div className="result__title">
                        запись от
                        20.11.2024
                    </div>
                    <div className="result__info">
                        <div className="result__text result__text-1">
                            <span>Период нахождения в фонде:</span> сентябрь 2024 - ноябрь 2024
                        </div>
                        <div className="result__text result__text-2">
                            <span>Комментарий от фонда о причинах ухода игрока:</span> игрок начал играть не
                            по сетке, после трех предупреждений был оштрафован. Перестал отвечать,
                            ушел с деньгами проекта
                        </div>
                        <div className="result__text result__text-3">
                            <span>Сумма ущерба:</span> 1200$
                        </div>
                    </div>
                    <div className="result__user-status">
                        Нарушитель
                    </div>
                </div>
            </div>
        </div>
    );
});

export default SearchResult;