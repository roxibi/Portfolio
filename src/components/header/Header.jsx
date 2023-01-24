import React from "react";
import CTA from "./CTA";
import "./header.css";

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <p>Hello I'm</p>
                <h1>Roxana Anamaria Bita</h1>
                <h2 className="capitals">FULLSTACK DEVELOPER</h2>
                <CTA />
                <div className="img">
                  <img src="" alt=""></img>
                </div>
            </div>
        </header>
    );
};

export default Header;
