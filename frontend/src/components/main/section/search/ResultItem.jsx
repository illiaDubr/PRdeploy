import React from "react";
import IconSvg from "../../components/IconSvg.jsx";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const ResultItem = ({content, iconId, label, hideIcon}) => {
    const contentRef = React.useRef(null);
    const [isOverflowing, setIsOverflowing] = React.useState(false);
    const [randomBorderColor, setRandomBorderColor] = React.useState(getRandomColor());

    React.useEffect(() => {
        if (contentRef.current) {
            const isTextOverflowing = contentRef.current.scrollWidth > contentRef.current.offsetWidth;
            setIsOverflowing(isTextOverflowing);
        }
    }, [content]);

    React.useEffect(() => {
        setRandomBorderColor(getRandomColor());
    }, []);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
        });
    };

    return (
        <div className="result__text">
            <div className="result__head">
                {!hideIcon ? (
                    iconId ? (
                        <IconSvg width={20} height={20} id={iconId} />
                    ) : (
                        <span style={{borderColor: `${randomBorderColor}`}}></span>
                    )
                ) : null}
                {label && <div className={"result__label"}>{label}</div>}
            </div>
            <div className="result__content" ref={contentRef} data-tooltip-id={isOverflowing ? "tooltip" : undefined}
                 data-tooltip-content={isOverflowing ? content : undefined}>
                {content || "—"}
            </div>
            <Tooltip id="tooltip" place="top" clickable={true}/>
        </div>
    )
}

export default ResultItem;