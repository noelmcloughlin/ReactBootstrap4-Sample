import React, {Component, Fragment} from "react";
import SideNav, {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import ClickOutside from  "react-click-outside";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "../../Routes";
import {Route} from "react-router-dom";

export default class SideMenu extends Component {
    state = {
        collapseID: ""
    };
    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.toggleCollapse("navbarCollapse")}
            />
        );
        return (
            <Router>
                <div className="flyout">
                    <Route render={({location, history}) => (
                        <Fragment>
                            <SideNav
                                onSelect={(selected) => {
                                    const to = '/' + selected;
                                    if (location.pathname !== to) {
                                        history.push(to);
                                    }
                                }} onClick={this.toggleCollapse("basicCollapse")} style={{width: 0}}>
                                <SideNav.Toggle/>
                                <SideNav.Nav defaultSelected="home">
                                    <NavItem eventKey="">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Home
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="css">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-css-page" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            CSS
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="components">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-components-page"
                                               style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Components
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="advanced">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-advanced-page"
                                               style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Advanced
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="navigation">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-navigation-page"
                                               style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Navigation
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="forms">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-forms-page" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Forms
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="tables">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-table-page" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Tables
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="modals">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-modals-page"
                                               style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Modals
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="addons">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-addons-page"
                                               style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Addons
                                        </NavText>
                                    </NavItem>
                                </SideNav.Nav>
                            </SideNav>
                            < main>
                                <Routes/>
                            </main>
                        </Fragment>
                    )}/>
                    {this.state.collapseID && overlay}
                    <ClickOutside
                        onClickOutside={() => {
                            this.setState({ expanded: false });
                        }} >
                        <SideNav
                            expanded={this.state.expanded}
                            onToggle={(expanded) => {
                                this.setState({ expanded });
                            }} >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="home">
                                <NavItem eventKey="home">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Home
                                    </NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                    </ClickOutside>
                </div>
            </Router>
        );
    }
}
