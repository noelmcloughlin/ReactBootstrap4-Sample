import React from "react";

const Header = props => {
    return (
        <header className="fixed-top page-header">
            <div className="container-fluid container-fluid-max">
                <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="#home">HoneyDreams</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-lg-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#process">How It Works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#featured-destinations">Featured Destinations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#popular-destinations">Popular Destinations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#request-quote">Request a Quote</a>
                            </li>
                        </ul>
                        <div className="text-white">
                            <a href="tel:1234567890" className="mr-2">
                                <i className="fas fa-phone"></i>
                                <div className="d-none d-xl-inline">1234567890</div>
                            </a>
                            <a href="mailto:info@honeydreams.com">
                                <i className="fas fa-envelope"></i>
                                <div className="d-none d-xl-inline">info@honeydreams.com</div>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
