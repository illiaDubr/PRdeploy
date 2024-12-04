import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();

    const routeNames = {
        "/": "Личный кабинет",
        "/main/section/search": "Поиск игроков",
    };

    const currentPath = location.pathname;
    const currentPage = routeNames[currentPath] || "Страница не найдена";

    return (
        <nav className="breadcrumbs">
            {currentPath !== "/" && (
                <>
                    <Link className="previous__page" to="/">Личный кабинет</Link> / <span className="current__page">{currentPage}</span>
                </>
            )}
            {currentPath === "/" && <span>Личный кабинет</span>}
        </nav>
    );
};

export default Breadcrumbs;