import React from "react";
import "../../../style/components/main/section/search/search.scss";
import {Helmet} from "react-helmet-async";
import Main from "../../../components/main/Main.jsx";
import SearchForm from "../../../components/main/section/search/SearchForm.jsx";
import SearchTable from "../../../components/main/section/search/SearchTable.jsx";

function Search() {
    const [searchResults, setSearchResults] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSearchPerformed, setIsSearchPerformed] = React.useState(false);

    const handleSearchResults = (results) => {
        setSearchResults(results);
        setIsSearchPerformed(true);
    };

    return (
        <>
            <Helmet>
                <title>
                    Поиск игроков
                </title>
            </Helmet>
            <Main secClassName="search__wrap" secID="search">
                <search role="search" className="search__container">
                    <SearchForm setSearchResults={handleSearchResults} setIsLoading={setIsLoading}/>
                </search>
                <SearchTable results={searchResults} isLoading={isLoading} isSearchPerformed={isSearchPerformed}/>
            </Main>
        </>
    );
}

export default Search;