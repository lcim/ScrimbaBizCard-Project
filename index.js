import React from "react";
import ReactDOM from "react-dom";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
// import "./style.css";

const ChiadiPortfolio = () => {
    return (
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
            
        </div>)
}

ReactDOM.render(<ChiadiPortfolio />, document.querySelector("#root"))
