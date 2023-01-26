import React from "react";
import CTA from "./CTA";
import Socials from "./Socials";
import "./header.css";

const Header = () => {
    return (
        <header id="header">
            <div className='container header__container'>
                <p>Hello I'm</p>
                <h1>Roxana Anamaria Bita</h1>
                <h2 className="capitals">FULLSTACK DEVELOPER</h2>
                <CTA />
            
                {/* <div className="img">
                  <img src={color} alt=""></img>
                </div> */}
                <Socials />
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;
