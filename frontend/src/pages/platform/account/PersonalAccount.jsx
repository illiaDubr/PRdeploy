import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import "../../style/helpers/fonts.scss";
import Main from "../../../components/main/Main.jsx";



function PersonalAccount() {
    return (
        <>
            <Helmet>
                <title>
                    Личный кабинет
                </title>
            </Helmet>
            <Main>
                <h1>
                    Личный кабинет
                </h1>
                <Link className="link" to="/main/section/search">Search</Link>
            </Main>
        </>
    )
}

export default PersonalAccount;