import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/porfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function EN() {
    return (
        <>
            <Header />
            <Navbar />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}

export default EN;
