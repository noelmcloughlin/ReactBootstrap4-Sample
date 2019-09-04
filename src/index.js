import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import registerServiceWorker from './registerServiceWorker';
import "bootstrap-css-only/css/bootstrap.min.css";

// import App from  './LandingPage-BS4/App';
// import "./LandingPage-BS4/index.css";

import App from  './MDB-React/App';
import './MDB-React/index.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render( <App /> , document.getElementById('root'));
registerServiceWorker();
