import React from "react";
import IconSvg from "../../components/IconSvg.jsx";
import ResultItem from "./ResultItem.jsx";

const backerTagConfig = {
    arbitration: { text: "Спорный случай", color: "red" },
    "left poker": { text: "Покинул покер", color: "orange" },
    "pays off debt": { text: "Погашает долг", color: "yellow" },
    "closed issue": { text: "Вопрос закрыт", color: "green" },
    default: { text: "Нет данных", color: "gray" },
};

const getBackerTagConfig = (tag) => backerTagConfig[tag] || backerTagConfig.default;


const ResultItemList = ({results}) => {
    const [resultInfo, setResultInfo] = React.useState(false);

    const toggleClass = () => {
        setResultInfo((prevState) => !prevState);
    };

    return (
        <div className="box">
            {
                results.map((item) => {
                    const {text, color} = getBackerTagConfig(item.backer_tag);
                   return (
                        <div className="result__box" key={item.id}>
                            <div className="result result-left">
                                <div className="result__title">
                                    {item.first_name || "—"}
                                </div>
                                <div className="result__info">
                                    <ResultItem content={item.phonenumber} iconId="search__phone"/>
                                    <ResultItem content={item.email} iconId="search__mail"/>
                                    <ResultItem content={item.discord} iconId="search__mail" label="Discord:"/>
                                    <ResultItem content={item.nickchikoPoker} label="СhikoPoker:"/>
                                </div>
                                <div
                                    className={`result__info ${resultInfo ? "result__info-active" : "result__info-close"}`}>
                                </div>
                                <button className={`result__btn ${resultInfo ? "result__btn-active" : ""}`}
                                        type="button" onClick={toggleClass}>
                                    {`${resultInfo ? "Свернуть" : "Показать еще"}`}
                                    <IconSvg width={20} height={20} id="arrow"/>
                                </button>
                            </div>
                            <div className="result result-right">
                                <div className="result__title">
                                    <div className="result__author">
                                        {item.fund_name || "—"}
                                    </div>
                                    <div className="result__info">
                                        Запись от
                                        <br/>
                                        {item.created_at ? item.created_at.slice(0, 10) : "-"}
                                    </div>
                                    <div className={`result__user-status result__user-status--${color}`}>
                                        {text}
                                    </div>
                                </div>
                                <div className="result__info">
                                    <ResultItem content={item.comment} label="Комментарий от фонда:"/>
                                    <ResultItem content={item.amount} label="Сумма ущерба:"/>
                                </div>
                            </div>
                        </div>
                   )
                })}
        </div>
    )
}

export default ResultItemList;