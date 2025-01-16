import { useState } from "react";
import IconSvg from "../../components/IconSvg.jsx";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const ResultItem = ({ content, iconId, label, hideIcon }) => {
    const [randomBorderColor] = useState(getRandomColor());

    const tooltipId = `resultitem-${Math.random().toString(36).slice(2, 9)}`;

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
                        <IconSvg width={20} height={20} id={iconId} />
                    ) : (
                        <span style={{ borderColor: randomBorderColor }} />
                    )
                )}
                {label && <div className="result__label">{label}</div>}
            </div>
            <div
                className="result__content"
                data-tooltip-id={tooltipId}      // «Якорь» тултипа
                data-tooltip-content={content}   // Текст для тултипа
            >
                {content || "—"}
            </div>
            <Tooltip
                id={tooltipId}
                place="top"
                clickable
                getContent={(dataTip) => {
                    if (!dataTip) return null;

                    return (
                        <div style={{ maxWidth: 220 }}>
                            <div style={{ marginBottom: "8px" }}>{dataTip}</div>
                            <button
                                onClick={() => copyToClipboard(dataTip)}
                                style={{
                                    cursor: "pointer",
                                    padding: "4px 8px",
                                    backgroundColor: "#efefef",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px"
                                }}
                            >
                                Скопировать
                            </button>
                        </div>
                    );
                }}
            />
        </div>
    );
};

export default ResultItem;