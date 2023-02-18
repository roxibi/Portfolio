import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EN from "./components/EN";
import DE from "./components/DE/DE";

function App() {
 

    return (
        <Router>
         
         
        <Routes>  <Route path={'/'} element={<DE/>}/> 
                 <Route path={'/en'} element={<EN/>}/> </Routes>
            
        </Router>
    );
}

export default App;
