import React from "react";
import IconSvg from "../../components/IconSvg.jsx";

const ResultTextItem = ({ iconId, label, content }) => {
    return (
        <div className="result__text">
            <div className="result__head">
                {iconId && <IconSvg width={20} height={20} id={iconId} />}  {/* Иконка */}
                {label && <span>{label}</span>}  {/* Метка (например, "Discord:") */}
            </div>
            <p>{content || "—"}</p>  {/* Содержимое блока (или дефолтный прочерк) */}
        </div>
    );
};

export default ResultTextItem;