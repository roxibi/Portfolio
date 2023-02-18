import React from "react";
import CTA from "./CTADE";
import Socials from "./SocialsDE";
import "./header.css";

const HeaderDE = () => {
    return (
        <header id="header">
            <div className='container header__container'>
             
                <p>Hallo, ich bin</p>
                <h1>Roxana Bita</h1>
                <h2 className="capitals">FULLSTACK-WEB-ENTWICKLERIN</h2>
                <CTA />
            
                {/* <div className="img">
                  <img src={color} alt=""></img>
                </div> */}
                <Socials />
                <a href="#contact" className="scroll__down">Runterscrollen</a>
            </div>
        </header>
    );
};

export default HeaderDE;
