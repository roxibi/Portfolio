import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import EN from "./components/header/EN";
import DE from "./components/header/DE";

function App() {
    return (
        <Router>
            <>
                <EN />
                <DE />
            </>
        </Router>
    );
}

export default App;
