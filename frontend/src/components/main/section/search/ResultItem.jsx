import { useEffect, useRef, useState } from "react";
import IconSvg from "../../components/IconSvg.jsx";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const ResultItem = ({ content, iconId, label, hideIcon }) => {
    const contentRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [randomBorderColor] = useState(getRandomColor());

    useEffect(() => {
        if (contentRef.current) {
            const isTextOverflowing =
                contentRef.current.scrollWidth > contentRef.current.offsetWidth;
            setIsOverflowing(isTextOverflowing);
        }
    }, [content]);

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
                ref={contentRef}
                data-tooltip-id={isOverflowing ? "tooltip" : undefined}
                data-tooltip-content={isOverflowing ? content : undefined}
            >
                {content || "—"}
            </div>

            <Tooltip id="tooltip" place="top" clickable />
        </div>
    );
};

export default ResultItem;