import React from "react";
import Main from "@/components/main/Main";
import SearchForm from "@/components/main/section/search/SearchForm";
import SearchTable from "@/components/main/section/search/SearchTable";
import {Helmet} from "react-helmet-async";

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