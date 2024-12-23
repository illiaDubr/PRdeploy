import "../../../style/components/main/section/search/search.scss";
import {Helmet} from "react-helmet-async";
import Main from "../../../components/main/Main.jsx";
import SearchForm from "../../../components/main/section/search/SearchForm.jsx";
import SearchTable from "../../../components/main/section/search/SearchTable.jsx";

function Search() {

    return (
        <>
            <Helmet>
                <title>
                    Поиск игроков
                </title>
            </Helmet>
            <Main secClassName="search__wrap" secID="search">
                <search role="search" className="search__container">
                    <SearchForm />
                </search>
                <SearchTable />
            </Main>
        </>
    );
}

export default Search;