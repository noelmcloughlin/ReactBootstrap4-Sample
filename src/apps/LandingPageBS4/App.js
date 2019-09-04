import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import Routes from "./Routes";

// components
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import "./components/main.css";
import "./index.css";
import ScrollScript from "./components/scroll-script";

class App extends Component {
    state = {
        collapseID: ""
    };

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Main />
                    <Footer/>
                    <ScrollScript/>
                </div>
            </Router>
        )}
}

export default App;
