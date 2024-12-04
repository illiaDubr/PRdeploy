import React from 'react';
import StickyBox from "react-sticky-box";
import Navigation from "@/components/main/section/header/Navigation";

const Header = () => {
    const [isButtonClicked, setIsButtonClicked] = React.useState(false);

    const handleButtonClick = () => {
        setIsButtonClicked(prevState => !prevState);
    }

    return (
        <div className={`header__wrap ${isButtonClicked ? "header__wrap-width" : ""}`}>
            <StickyBox offsetTop={40} offsetBottom={0}>
                <header className={`header ${isButtonClicked ? "header-width" : ""}`}>
                    <Navigation onButtonClick={handleButtonClick} />
                </header>
            </StickyBox>
        </div>
    )
}

export default Header;