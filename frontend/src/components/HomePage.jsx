import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import "../style/helpers/fonts.scss";
import Auth from "./main/section/HomePage/auth/Auth.jsx";


function HomePage() {


    return (
        <>
            <Helmet>
                <title>
                    Player`s Reputation
                </title>
            </Helmet>
            <h1>
                Player`s Reputation
            </h1>
            <Link to="/main/section/PersonalAccount">Личный кабинет</Link>
            <Auth />
        </>
    )
}

export default HomePage;