import React from "react";

const Footer = props => {
    return (
        <>
            <footer className="py-5 page-footer">
                <div className="container-fluid container-fluid-max">
                    <div className="row">
                        <div className="col-12 col-md-6 footer-child copyright">...</div>
                        <div className="col-12 col-md-6 footer-child footer-links">
                            <a href="https://google.com" className="mr-3">...</a>
                            <a href="https://google.com">google</a>
                            <div>
                                <small>... ball2 ....</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;