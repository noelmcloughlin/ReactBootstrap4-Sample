import React from "react";
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBView,
    MDBContainer,
    MDBAnimation,
    MDBCard,
    MDBCardTitle,
    MDBBtn,
    MDBIcon
} from "mdbreact";
import "./index.css";
import './assets/css/fonts/index.css';
import SideMenu from "./components/menu";
import BackgroundImagePage from "./components/background";

class ClassicFormPage extends React.Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {

        return (
            <div>
                <MDBView>
                    <BackgroundImagePage/>
                    <MDBContainer className="mt-5">
                        <MDBView>
                            <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" class="img-fluid" alt=""/>
                            <MDBMask className="flex-center" overlay="green-strong">
                                <p className="white-text">text</p>
                            </MDBMask>
                        </MDBView>
                    </MDBContainer>
                    <MDBMask className="flex-center" overlay="green-strong">
                        <MDBContainer className="container-fluid">
                            <BackgroundImagePage/>
                            <MDBRow>
                                <MDBAnimation
                                    type="fadeInUp"
                                    delay=".3s"
                                    className="black-text text-center mt-xl-15 mb-15">

                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h1 className="amiri">
                                                    Where is Conmaicne Rein{" "}
                                                </h1>
                                            </div>
                                        </div>
                                        <blockquote className="blockquote text-center">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Integer posuere erat
                                                a ante.</p>
                                            <footer className="blockquote-footer mb-3">Someone famous in <cite
                                                title="Source Title">Source
                                                Title</cite></footer>
                                        </blockquote>

                                        <div className="row align-items-end">
                                            <div className="col">
                                                <hr className="hr-light"/>
                                                <h6 className="mb-4">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </MDBAnimation>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBCard>
                                        <div
                                            className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
                                            <div>
                                                <h5 className="orange-text">
                                                    <MDBIcon icon="desktop"/> Software
                                                </h5>
                                                <MDBCardTitle tag="h3" className="pt-2">
                                                    <strong>This is card title</strong>
                                                </MDBCardTitle>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    sit officia accusamus minus error nisi architecto nulla ipsum
                                                    dignissimos. Odit sed qui, dolorum!
                                                </p>
                                                <MDBBtn color="deep-orange">
                                                    <MDBIcon icon="clone left"/> View project
                                                </MDBBtn>
                                            </div>
                                        </div>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>

                <MDBContainer>
                    <MDBRow className="py-5">
                        <MDBCol md="12" className="text-center">
                            <SideMenu/>>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer>
                    <MDBRow className="py-5">
                        <MDBCol md="12" className="text-center">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                </MDBView>
            </div>
        );
    }
}

export default ClassicFormPage;
