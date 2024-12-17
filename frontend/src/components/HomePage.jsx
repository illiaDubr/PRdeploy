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
                Player`s Reputation<sub style={{fontSize: "20px", opacity: ".5"}}>beta</sub>
            </h1>
            <Auth />
        </>
    )
}

export default HomePage;