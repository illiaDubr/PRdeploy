import ResultTextItem from "./ResultTextItem.jsx";
import FilteredFunds from "./FilteredFunds.jsx";

const ResultItemList = ({results}) => {


    return (
        <div className="box">
            {results.map((item) => (
                <div className="result__box">
                    <div className="result result-left">
                        <div className="result__title">
                            {item.first_name}
                        </div>
                        <FilteredFunds item={item}/>
                        {/*<div className="result__info">
                            <div className="result__text result__text-1">
                                <div className="result__head">
                                    <IconSvg width={20} height={20} id="search__phone"/>
                                </div>
                                {item.phonenumber}
                            </div>
                            <div className="result__text result__text-2">
                                <div className="result__head">
                                    <IconSvg width={20} height={20} id="search__mail"/>
                                </div>
                                {item.email}
                            </div>
                            <div className="result__text result__text-3">
                                <div className="result__head">
                                    <IconSvg width={20} height={20} id="search__discord"/>
                                    Discord:
                                </div>
                                <p content="result__text-discord block-2">
                                    {item.discord}
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
                        </div>*/}
                    </div>
                    <div className="result result-right">
                        <div className="result__title">
                            запись от
                            {item.created_at}
                        </div>
                        <div className="result__info">
                            <ResultTextItem
                                label="Период нахождения в фонде:"
                            />
                            <ResultTextItem
                                label="Комментарий от фонда о причинах ухода игрока:"
                                content={item.descr}
                            />
                            <ResultTextItem
                                label="Сумма ущерба:"
                                content={item.amount}
                            />
                            {/*<div className="result__text result__text-1">
                                <span>Период нахождения в фонде:</span>
                            </div>
                            <div className="result__text result__text-2">
                                <span>
                                    Комментарий от фонда о причинах ухода игрока:
                                </span>
                                {item.descr}
                            </div>
                            <div className="result__text result__text-3">
                                <span>
                                    Сумма ущерба:
                                </span>
                                {item.amount}
                            </div>*/}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResultItemList;