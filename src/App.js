import React from "react";
import "./App.css";

//Components
import Menu from "./components/Menu";

function App() {
    return (
        <div className="App">
            <div id="logoBar" className="w-100 h-60px" />
            {/* logoBar spacer */}
            <div className="w-100 h-60px" />
            <Menu />
        </div>
    );
}

export default App;
