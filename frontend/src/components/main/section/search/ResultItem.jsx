import {useState} from "react";
import IconSvg from "../../components/IconSvg.jsx";
import {Tooltip} from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const ResultItem = ({content, iconId, label, hideIcon}) => {
    const [randomBorderColor] = useState(getRandomColor());

    const tooltipId = `resultItem-${Math.random().toString(36).slice(2, 9)}`;

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log("Скопировано!");
            })
            .catch(() => {
                console.error("Ошибка копирования");
            });
    };

    return (
        <div className="result__text">
            <div className="result__head">
                {!hideIcon && (
                    iconId ? (
                        <IconSvg width={20} height={20} id={iconId}/>
                    ) : (
                        <span style={{borderColor: randomBorderColor}}/>
                    )
                )}
                {label && <div className="result__label">{label}</div>}
            </div>
            <div
                className="result__content"
                data-tooltip-id={tooltipId}
                data-tooltip-content={content}
            >
                {content || "—"}
            </div>
            <Tooltip id={tooltipId} place="top" clickable>
                <button onClick={copyToClipboard}>Скопировать</button>
            </Tooltip>
        </div>
    );
};

export default ResultItem;