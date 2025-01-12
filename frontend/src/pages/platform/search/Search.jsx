import React from "react";
import "../../../style/components/main/section/search/search.scss";
import {Helmet} from "react-helmet-async";
import Main from "../../../components/main/Main.jsx";
import SearchForm from "../../../components/main/section/search/SearchForm.jsx";
import IconSvg from "../../../components/main/components/IconSvg.jsx";
import SearchResult from "../../../components/main/section/search/SearchResult.jsx";

function Search() {
    const [resultInfo, setResultInfo] = React.useState(false);

    const toggleClass = () => {
        setResultInfo((prevState) => !prevState);
    };

    return (
        <>
            <Helmet>
                <title>
                    Поиск игроков
                </title>
            </Helmet>
            <Main secClassName="search__wrap" secID="search">

                <div className="result__container">
                    <div className="result__box">
                        <div className="result result-left">
                            <div className="result__title">
                                Иванов Иван Иванович
                            </div>
                            <div className="result__info">
                                <div className="result__text">
                                    <div className="result__head">
                                        <IconSvg width={20} height={20} id="search__phone"/>
                                    </div>
                                    лоатцулота
                                </div>
                                <div className="result__text">
                                    <div className="result__head">
                                        <IconSvg width={20} height={20} id="search__mail"/>
                                    </div>
                                    fwekfjnwef
                                </div>
                                <div className="result__text">
                                    <div className="result__head">
                                        <IconSvg width={20} height={20} id="search__discord"/>
                                    </div>
                                    fwekfjnwef
                                </div>
                                <div className="result__text">
                                    <div className="result__head">
                                        <span>
                                        </span>
                                    </div>
                                    fwekfjnwef
                                </div>
                                <div className="result__text">
                                    <div className="result__head">
                                        <span>
                                        </span>
                                    </div>
                                    fwekfjnwef
                                </div>
                                <div className="result__text">
                                    <div className="result__head">
                                        <span>
                                        </span>
                                        wefewf:
                                    </div>
                                    fwekfjnwef
                                </div>
                                <button className={`result__btn ${resultInfo ? "result__btn-active" : ""}`} type="button" onClick={toggleClass}>
                                    Показать еще
                                    <IconSvg width={20} height={20} id="arrow"/>
                                </button>
                            </div>
                            <div className={`result__info ${resultInfo ? "result__info-active" : "result__info-close"}`}>
                                <div className="result__text">
                                    <div className="result__head">
                                        <span>
                                        </span>
                                    </div>
                                    fwekfjnwef
                                </div>
                                <div className="result__text">
                                    <div className="result__head">
                                        <span>
                                        </span>
                                    </div>
                                    fwekfjnwef
                                </div>
                                <div className="result__text">
                                    <div className="result__head">
                                        <span>
                                        </span>
                                        wefewf:
                                    </div>
                                    fwekfjnwef
                                </div>
                            </div>
                        </div>
                        <div className="result result-right">
                            <div className="result__title">
                                <div className="result__author">
                                    SV Team
                                </div>
                                <div className="result__info">
                                    запись от
                                    <br/>
                                    29.03.2013
                                </div>
                            </div>
                            <div className="result__info">
                                <div className="result__text">
                                    <span>
                                        Комментарий от фонда о причинах ухода игрока:
                                    </span>
                                    &nbsp;игрок начал играть не по сетке, после
                                    трех предупреждений был оштрафован.
                                    Перестал отвечать, ушел с деньгами проекта
                                </div>
                                <div className="result__text">
                                    <span>
                                        Cумма ущерба:
                                    </span>
                                    &nbsp;1000$
                                </div>
                            </div>
                            <div className="result__user-status">
                                Нарушитель
                            </div>
                        </div>
                    </div>
                </div>


                <search role="search" className="search__container">
                    <SearchForm/>
                </search>
                <SearchResult />
            </Main>
        </>
    );
}

export default Search;