import React from "react";
import Main from "./main/Main";
import {Link} from "react-router-dom";


function HomePage() {
    return (
        <Main>
            <h1>
                Личный кабинет
            </h1>
            <Link className="link" to="/main/section/search">Search</Link>
        </Main>
    )
}

export default HomePage;