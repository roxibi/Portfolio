import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EN from "./components/EN";
import DE from "./components/DE/DE";

function App() {
 

    return (
        <Router>
            <div id='language'>
            <button className="language btn btn-primary" ><a href='/en'> EN</a></button> <button className="language btn btn-primary"> <a href='/'> DE</a></button></div>
        <Routes>  <Route path={'/'} element={<DE/>}/> 
                 <Route path={'/en'} element={<EN/>}/> </Routes>
            
        </Router>
    );
}

export default App;
