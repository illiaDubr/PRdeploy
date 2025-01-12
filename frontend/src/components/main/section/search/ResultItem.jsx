import React from "react";
import IconSvg from "../../components/IconSvg.jsx";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const ResultItem = ({content, iconId, label, hideIcon}) => {
    const contentRef = React.useRef(null);
    const [isOverflowing, setIsOverflowing] = React.useState(false);

    React.useEffect(() => {
        if (contentRef.current) {
            const isTextOverflowing = contentRef.current.scrollWidth > contentRef.current.offsetWidth;
            setIsOverflowing(isTextOverflowing);
        }
    }, [content]);

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
                {label && <div>{label}</div>}
            </div>
            <div className="result__content" ref={contentRef} data-tooltip-id={isOverflowing ? "tooltip" : undefined} data-tooltip-content={isOverflowing ? content : undefined}>
                {content || "—"}
            </div>
            <Tooltip id="tooltip" place="top" isInteractive={true}/>
        </div>
    )
}

export default ResultItem;