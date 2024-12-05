import React from "react";
import {Route, Routes} from "react-router-dom";
import Search from "./components/main/section/search/Search";
import HomePage from "./components/HomePage";
import {Helmet} from "react-helmet-async";
import Favicons from "@/assets/image/favicons/favicons";

function App() {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href={Favicons.favicon}/>
                <link rel="icon" type="image/png" href={Favicons.favicon96x96} sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href={Favicons.faviconSvg} />
                <link rel="apple-touch-icon" sizes="180x180" href={Favicons.faviconApple} />
            </Helmet>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/main/section/search" element={<Search/>}/>
            </Routes>
        </>
    )
}

export default App;