import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

// Default
import registerServiceWorker from './registerServiceWorker';
/*import App from "./App";*/

// Learning Apps

// Landing Page Template With Bootstrap 4
// https://webdesign.tutsplus.com/tutorials/how-to-build-a-landing-page-with-bootstrap-4--cms-32519
import LandingPageBS4 from "./apps/LandingPageBS4/App"
let MyApp = LandingPageBS4;


// Run MyApp
ReactDOM.render( <MyApp /> , document.getElementById('root'));
registerServiceWorker();