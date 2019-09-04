import React from "react";

const Main = props => {
    return (
        <>
            <main>
                <section id="home" className="d-flex align-items-center position-relative vh-100 cover hero"
                         style={{backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/cappadocia.jpg)`}}>
                    <div className="container-fluid container-fluid-max">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <h1 className="text-white">Live an unforgettable experience in Cappadocia!</h1>
                                <div className="mt-3">
                                    <a className="btn bg-red text-white mr-2" href="http://localhost:3000/#home"role="button">Book Now</a>
                                    <a className="btn bg-red text-white" href="http://localhost:3000/#home"role="button">Select Your Package</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="process" className="process">
                    <div className="container-fluid container-fluid-max">
                        <div className="row text-center py-5">
                            <div className="col-12 pb-4">
                                <h2 className="text-red">How It Works</h2>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <span className="fa-stack fa-2x">
                                  <i className="fas fa-circle fa-stack-2x text-red"></i>
                                  <i className="fas fa-map-marked fa-stack-1x text-white"></i>
                                </span>
                                <h3 className="mt-3 text-red h4">Choose a destination</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed repudiandae.</p>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <span className="fa-stack fa-2x">
                                  <i className="fas fa-circle fa-stack-2x text-red"></i>
                                  <i className="fas fa-plane fa-stack-1x text-white"></i>
                                </span>
                                <h3 className="mt-3 text-red h4">Book a flight</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed repudiandae.</p>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <span className="fa-stack fa-2x">
                                  <i className="fas fa-circle fa-stack-2x text-red"></i>
                                  <i className="fas fa-car fa-stack-1x text-white"></i>
                                </span>
                                <h3 className="mt-3 text-red h4">Rent a car</h3>
                                <p>Nor again is there anyone who loves or pursues or desires to obtain pain.</p>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <span className="fa-stack fa-2x">
                                  <i className="fas fa-circle fa-stack-2x text-red"></i>
                                  <i className="fas fa-home fa-stack-1x text-white"></i>
                                </span>
                                <h3 className="mt-3 text-red h4">Rent an appartment</h3>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                    laboriosam,
                                    nisi ut aliquid ex ea commodi.</p>
                            </div>
                            <div className="col-12 pt-3">
                                <a className="btn bg-red text-white" target="_blank" rel="noopener noreferrer"
                                   href="https://en.wikipedia.org/wiki/Neuschwanstein_Castle" role="button">Learn More
                                    →</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="featured-destinations" className="featured-destinations bg-lightblue">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-6 d-flex align-items-center order-1 order-md-0">
                            <div className="p-15">
                                <h3>Explore Norway</h3>
                                <p><strong>Ålesund</strong> is a town and municipality in Møre og Romsdal County,
                                    Norway. It
                                    is part of the traditional district of Sunnmøre and the centre of the Ålesund
                                    Region. It
                                    is a sea port and is noted for its concentration of Art Nouveau
                                    architecture. The town of Ålesund is the administrative centre of Ålesund
                                    Municipality,
                                    as well as the principal shipping town of the Sunnmøre district. </p>
                                <p>The 99-square-kilometre (38 sq mi) municipality is the 382nd largest by area out of
                                    the
                                    422 municipalities in Norway. Ålesund is the 17th most populous municipality in
                                    Norway
                                    with a population of 47,199. The municipality's population density
                                    is 506.6 inhabitants per square kilometre (1,312/sq mi) and its population has
                                    increased
                                    by 14% over the last decade.</p>
                                <a className="btn bg-red text-white" target="_blank" rel="noopener noreferrer"
                                   href="https://en.wikipedia.org/wiki/%C3%85lesund" role="button">Read More →</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 order-0 order-md-1">
                            <div className="vh-100 cover" style={{backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/norway_700.jpg)`}}></div>
                        </div>
                        <div className="col-12 col-md-6 order-2">
                            <div className="vh-100 cover" style={{backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/norway_700.jpg)`}}></div>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center order-3">
                            <div className="p-15">
                                <h3>Explore Germany</h3>
                                <p><strong>Neuschwanstein Castle</strong> is a 19th-century Romanesque Revival palace on
                                    a
                                    rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria,
                                    Germany. The palace was commissioned by Ludwig II of Bavaria as a retreat
                                    and in honour of Richard Wagner. Ludwig paid for the palace out of his personal
                                    fortune
                                    and by means of extensive borrowing, rather than Bavarian public funds.</p>
                                <p>The castle was intended as a home for the king, until he died in 1886. It was open to
                                    the
                                    public shortly after his death. Since then more than 61 million people have visited
                                    Neuschwanstein Castle. More than 1.3 million people visit annually,
                                    with as many as 6,000 per day in the summer.</p>
                                <a className="btn bg-red text-white" target="_blank" rel="noopener noreferrer"
                                   href="https://en.wikipedia.org/wiki/Neuschwanstein_Castle" role="button">Read More
                                    →</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="popular-destinations" className="popular-destinations py-5">
                    <div className="container-fluid container-fluid-max">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="pb-3 text-red">Popular Destinations</h2>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <a href="http://localhost:3000/#home"className="text-white">
                                    <figure className="position-relative overflow-hidden">
                                        <img className="img-fluid"
                                             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Vienna.jpg"
                                             alt="Vienna"/>
                                            <figcaption
                                                className="d-flex align-items-center justify-content-center position-absolute">
                                                <h3>Vienna</h3>
                                            </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <a href="http://localhost:3000/#home"className="text-white">
                                    <figure className="position-relative overflow-hidden">
                                        <img className="img-fluid"
                                             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Edinburgh.jpg"
                                             alt="Edinburgh"/>
                                            <figcaption
                                                className="d-flex align-items-center justify-content-center position-absolute">
                                                <h3>Edinburgh</h3>
                                            </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <a href="http://localhost:3000/#home"className="text-white">
                                    <figure className="position-relative overflow-hidden">
                                        <img className="img-fluid"
                                             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/new_york.jpg"
                                             alt="New York"/>
                                            <figcaption
                                                className="d-flex align-items-center justify-content-center position-absolute">
                                                <h3>New York</h3>
                                            </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className="col-12 col-sm-6">
                                <a href="http://localhost:3000/#home"className="text-white">
                                    <figure className="position-relative overflow-hidden">
                                        <img className="img-fluid"
                                             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/porto.jpg"
                                             alt="Porto"/>
                                            <figcaption
                                                className="d-flex align-items-center justify-content-center position-absolute">
                                                <h3>Porto</h3>
                                            </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className="col-12 col-md-6">
                                <a href="http://localhost:3000/#home"className="text-white">
                                    <figure className="position-relative overflow-hidden">
                                        <img className="img-fluid"
                                             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/manarola.jpg"
                                             alt="Manarola"/>
                                            <figcaption
                                                className="d-flex align-items-center justify-content-center position-absolute">
                                                <h3>Manarola</h3>
                                            </figcaption>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <a className="btn bg-red text-white" href="http://localhost:3000/#home"role="button">More Destinations ↓</a>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="request-quote" className="py-5 request-quote bg-lightblue">
                    <div className="container-fluid container-fluid-max">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-auto py-3 text-center">
                                <h2 className="mb-0 text-red">Ready to start your next journey?</h2>
                                <p className="mb-0 h4 text-red font-weight-normal">Get in touch today!</p>
                            </div>
                            <div className="col-12 col-md-auto d-flex justify-content-center align-items-center">
                                <a className="btn bg-red text-white font-weight-bold" href="http://localhost:3000/#home"role="button">
                                    REQUEST A QUOTE
                                    <i className="ml-1 fas fa-hand-point-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
};

export default Main;
