import React from "react";
import IconSvg from "../../components/IconSvg.jsx";


const ResultItemList = ({results}) => {
    const [resultInfo, setResultInfo] = React.useState(false);

    const toggleClass = () => {
        setResultInfo((prevState) => !prevState);
    };

    return (
        <div className="box">
            {
                results.map((item) => (
                    <div className="result__box" key={item.id}>
                        <div className="result result-left">
                            <div className="result__title">
                                {item.first_name}
                            </div>
                            <div className="result__info">
                                <button className={`result__btn ${resultInfo ? "result__btn-active" : ""}`} type="button"
                                        onClick={toggleClass}>
                                    Показать еще
                                    <IconSvg width={20} height={20} id="arrow"/>
                                </button>
                            </div>
                            <div className={`result__info ${resultInfo ? "result__info-active" : "result__info-close"}`}>
                            </div>
                        </div>
                        <div className="result result-right">
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ResultItemList;