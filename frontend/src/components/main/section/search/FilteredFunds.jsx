import React from "react";
import ResultTextItem from "./ResultTextItem";

const FilteredFunds = ({ item }) => {
    const basicFields = [
        { iconId: "search__phone", content: item.phonenumber },
        { iconId: "search__mail", content: item.email },
        { iconId: "search__discord", label: "Discord:", content: item.discord },
    ];

    const importantFunds = [
        { label: "Pokerok:", content: item.nickTigerGaming },
        { label: "PS:", content: item.nickRedStar },
        { label: "Winamax:", content: item.nickPokerstars },
    ];

    const secondaryFunds = [
        { label: "Poker:", content: item.nick888poker },
        { label: "Sv Team:", content: item.nickGG },
    ];

    let displayedFunds = importantFunds.filter((field) => field.content).slice(0, 3);

    if (displayedFunds.length < 3) {
        const additionalFunds = secondaryFunds.filter((field) => field.content);
        displayedFunds = [
            ...displayedFunds,
            ...additionalFunds.slice(0, 3 - displayedFunds.length),
        ];
    }

    while (displayedFunds.length < 3) {
        displayedFunds.push({ label: "Фонд:", content: "-" });
    }

    return (
        <div className="result__info">
            {basicFields.map((field, index) => (
                <ResultTextItem
                    key={`basic-${index}`}
                    iconId={field.iconId}
                    label={field.label}
                    content={field.content}
                />
            ))}
            {displayedFunds.map((field, index) => (
                <ResultTextItem
                    key={`fund-${index}`}
                    label={field.label}
                    content={field.content}
                />
            ))}
        </div>
    );
};

export default FilteredFunds;