import React from "react";
import Main from "../../Main";
import SearchForm from "@/components/main/section/search/SearchForm";
import SearchTable from "@/components/main/section/search/SearchTable";

function Search() {
    return (
        <Main secClassName="search__wrap" secID="search">
            <search role="search" className="search__container">
                <SearchForm />
            </search>
            <div className="table__container">
                <SearchTable />
            </div>
        </Main>
    );
}

export default Search;