import IconSvg from "../../components/IconSvg.jsx";
import ResultItem from "./ResultItem.jsx";

const BACKER_TAG_CONFIG = {
    arbitration: { text: "Спорный случай", color: "red" },
    "left poker": { text: "Ушел из покера", color: "orange" },
    "pays off debt": { text: "Погашает долг", color: "yellow" },
    "closed issue": { text: "Рассчитался", color: "green" },
    default: { text: "Нет метки", color: "gray" },
};

function getBackerTagConfig(tag) {
    return BACKER_TAG_CONFIG[tag] || BACKER_TAG_CONFIG.default;
}

function formatFullName(firstName, lastName, middleName) {
    return `${firstName || ""} ${lastName || ""} ${middleName || ""}`.trim();
}

function formatDate(dateString) {
    if (!dateString) return "-";
    return dateString.slice(0, 10);
}

const ResultItemList = ({ results = [] }) => {
    if (!results.length) {
        return <p>Нет данных</p>;
    }

    return (
        <div className="result__wrapper">
            {results.map((item) => {
                const {
                    id,
                    backer_tag,
                    first_name,
                    last_name,
                    middle_name,
                    phonenumber,
                    email,
                    discord,
                    fund_name,
                    created_at,
                    amount,
                    comment,
                } = item;

                const { text, color } = getBackerTagConfig(backer_tag);
                const fullName = formatFullName(first_name, last_name, middle_name);
                const date = formatDate(created_at);

                return (
                    <div className="result__box" key={id}>
                        <div className="result result-left">
                            <div className="result__title">{fullName}</div>
                            <div className="result__info">
                                <ResultItem content={phonenumber} iconId="search__phone" />
                                <ResultItem content={email} iconId="search__mail" />
                                <ResultItem content={discord} iconId="search__mail" label="Discord:" />
                            </div>
                        </div>

                        <div className="result result-right">
                            <div className="result__title">
                                <div className="result__author">
                                    <IconSvg width={48} height={48} id={fund_name} />
                                </div>
                                <div>
                                    Запись от
                                    <br />
                                    {date}
                                </div>
                            </div>
                            <div className={`result__user-status result__user-status--${color}`}>
                                {text}
                            </div>
                            <div className="result__info">
                                <ResultItem content={amount} label="Сумма ущерба:" hideIcon />
                                <ResultItem content={comment} label="Комментарий от фонда:" hideIcon />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ResultItemList;