import "./App.css";
import React from "react";
import HeaderDE from "./components/header/Header";
import NavbarDE from "./components/navbar/Navbar";
import AboutDE from "./components/about/About";
import ExperienceDE from "./components/experience/Experience";
import PortfolioDE from "./components/porfolio/Portfolio";
import ContactDE from "./components/contact/Contact";
import FooterDE from "./components/footer/Footer";

function DE() {
    return (
        <>
            <HeaderDE />
            <NavbarDE />
            <AboutDE />
            <ExperienceDE />
            <PortfolioDE />
            <ContactDE />
            <FooterDE />
        </>
    );
}

export default DE;
