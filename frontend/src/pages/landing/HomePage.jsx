import React from "react";
import {Helmet} from "react-helmet-async";
import "../../style/helpers/fonts.scss";
import { Context } from "../../api/store/storeContext.js";
import LogoutBtn from "../../components/main/components/LogoutBtn.jsx";
import Auth from "../../components/main/section/HomePage/auth/Auth.jsx";
import Cookies from 'js-cookie';

 


function HomePage() {
    const {store} = React.useContext(Context);

    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth().then(r =>
                console.log("Check Auth"),
            );
        }
    }, [store]);

    if (store.isLoading) {
        return <div>Загрузка...</div>;
    }


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

            {store.isAuth ? `Пользователь авторизован` : 'АВТОРИЗУЙТЕСЬ'}
            <LogoutBtn className="temporary"/>
        </>
    )
}

export default HomePage;