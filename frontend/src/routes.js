import {ACCOUNT_ROUTE, HOMEPAGE_ROUTE, SEARCH_ROUTE} from "./utils/const.js";
import HomePage from "./pages/landing/HomePage.jsx";
import Search from "./pages/platform/Search.jsx";
import PersonalAccount from "./pages/platform/PersonalAccount.jsx";

export const authRoutes = [
    {
        path: SEARCH_ROUTE,
        Component: Search
    },
    {
        path: ACCOUNT_ROUTE,
        Component: PersonalAccount
    },
]

export const publicRoutes = [
    {
        path: HOMEPAGE_ROUTE,
        Component: HomePage
    },
]