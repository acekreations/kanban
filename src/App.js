import React from "react";
import "./App.css";
import data from "./seeds";

//Components
import Menu from "./components/Menu";
import Column from "./components/Column";

function App() {
    return (
        <div className="App">
            <div id="logoBar" className="w-100 h-60px" />

            <Menu />

            <div
                id="contentContainer"
                className="ml-100px mt-100px pl-20px pt-20px"
            >
                <Column />
            </div>
        </div>
    );
}

export default App;
