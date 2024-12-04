import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./components/main/section/search/Search";
import HomePage from "./components/HomePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/main/section/search" element={<Search />} />
        </Routes>
    )
}

export default App;