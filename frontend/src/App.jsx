import {Helmet} from "react-helmet-async";
import {Route, Routes} from "react-router-dom";
import Search from "./components/main/section/search/Search.jsx";
import HomePage from "./components/HomePage.jsx";
import PersonalAccount from "./components/main/section/PersonalAccount/PersonalAccount.jsx";
import {ModalProvider} from "./components/main/components/Modal.jsx";

function App() {
    return (
        <>
            <Helmet>

            </Helmet>
            <ModalProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/main/section/PersonalAccount" element={<PersonalAccount />} />
                    <Route path="/main/section/search" element={<Search />} />
                </Routes>
            </ModalProvider>
        </>
    )
}

export default App;