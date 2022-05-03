import React from "react";
import "./header.css";
import HeaderLogo from "./Images/header-image.svg"

const Header = ({headTitle, headerExpanded}) => {
    return (
        <div className="head-container">
            <img src={HeaderLogo} className={`head-img ${headerExpanded ? 'head-img-expanded' : 'head-img-contracted' }`} alt="headerImage" />
            <h1 className={`head-text ${headerExpanded ? 'head-text-expanded' : 'head-text-contracted'}`} >{headTitle}</h1>
        </div>
    )
};

export default Header;