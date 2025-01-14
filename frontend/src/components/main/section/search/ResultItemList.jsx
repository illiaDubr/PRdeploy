import React from "react";
import IconSvg from "../../components/IconSvg.jsx";
import ResultItem from "./ResultItem.jsx";

const backerTagConfig = {
    arbitration: { text: "Спорный случай", color: "red" },
    "left poker": { text: "Ушел из покера", color: "orange" },
    "pays off debt": { text: "Погашает долг", color: "yellow" },
    "closed issue": { text: "Рассчитался", color: "green" },
    default: { text: "Нет метки", color: "gray" },
};

const getBackerTagConfig = (tag) => backerTagConfig[tag] || backerTagConfig.default;


const ResultItemList = ({results}) => {
    const [resultInfo, setResultInfo] = React.useState(false);

    const toggleClass = () => {
        setResultInfo((prevState) => !prevState);
    };

    return (
        <div className="result__wrapper">
            {
                results.map((item) => {
                    const {text, color} = getBackerTagConfig(item.backer_tag);
                   return (
                        <div className="result__box" key={item.id}>
                            <div className="result result-left">
                                <div className="result__title">
                                    {item.first_name || ""}
                                    {item.last_name || ""}
                                    {item.middle_name || ""}
                                </div>
                                <div className="result__info">
                                    <ResultItem content={item.phonenumber} iconId="search__phone"/>
                                    <ResultItem content={item.email} iconId="search__mail"/>
                                    <ResultItem content={item.discord} iconId="search__mail" label="Discord:"/>
                                    <ResultItem content={item.nickchikoPoker} label="СhikoPoker:"/>
                                    <ResultItem content={item.Ggpokerok} label="GgPokerok:"/>
                                    <ResultItem content={item.Ggnetwork} label="GgNetwork:"/>
                                </div>
                                <div className={`result__info ${resultInfo ? "result__info-active" : "result__info-close"}`}>
                                    <ResultItem content={item.Pokerstars_com} label="PokerStars.com:"/>
                                    <ResultItem content={item.Pokersters_es} label="PokerSters.es:"/>
                                    <ResultItem content={item.Winamax_fr} label="Winamax:"/>
                                    <ResultItem content={item.nickPS} label="PS:"/>
                                    <ResultItem content={item.nickGG} label="GG:"/>
                                    <ResultItem content={item.nickRedStar} label="RedStar:"/>
                                    <ResultItem content={item.nickRedStar} label="RedStar:"/>
                                    <ResultItem content={item.nickTigerGaming} label="TigerGaming:"/>
                                    <ResultItem content={item.nickPartyPoker} label="PartyPoker:"/>
                                    <ResultItem content={item.nickPokerstars} label="Pokerstars:"/>
                                    <ResultItem content={item.nick888poker} label="888poker:"/>
                                    <ResultItem content={item.nickWPNpoker} label="WPNpoker:"/>
                                    <ResultItem content={item.nickStretchpoker} label="StretchPoker:"/>
                                    <ResultItem content={item.nickCoinpoker} label="Coinpoker:"/>
                                    <ResultItem content={item.nickiPoker} label="iPoker:"/>
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
                                    <div className="">
                                        Запись от
                                        <br/>
                                        {item.created_at ? item.created_at.slice(0, 10) : "-"}
                                    </div>
                                </div>
                                <div className={`result__user-status result__user-status--${color}`}>
                                    {text}
                                </div>
                                <div className="result__info">
                                    <ResultItem content={item.amount} label="Сумма ущерба:" hideIcon={true}/>
                                    <ResultItem content={item.comment} label="Комментарий от фонда:" hideIcon={true}/>
                                </div>
                            </div>
                        </div>
                   )
                })}
        </div>
    )
}

export default ResultItemList;