import IconSvg from "../../components/IconSvg.jsx";

const ResultItem = ({content, iconId, label, hideIcon}) => {
    return (
        <div className="result__text">
            <div className="result__head">
                {!hideIcon ? (
                    iconId ? (
                        <IconSvg width={20} height={20} id={iconId} />
                    ) : (
                        <span></span>
                    )
                ) : null}
                {label && {label}}
            </div>
            {content || "—"}
        </div>
    )
}

export default ResultItem;