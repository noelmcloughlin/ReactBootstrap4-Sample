import React from "react";
import { Route, Switch } from "react-router-dom";

import NavigationNavPage from "../../pages/NavigationNavPage";
import FormsNavPage from "../../pages/FormsNavPage";
import TablesNavPage from "../../pages/TablesNavPage";
import AddonsNavPage from "../../pages/AddonsNavPage";
import ModalsNavPage from "../../pages/ModalsNavPage";
import AdvancedNavPage from "../../pages/AdvancedNavPage";
import ComponentsNavPage from "../../pages/ComponentsNavPage";

// FREE
import HomePage from "./../../pages/HomePage";
import CSSNavPage from "./../../pages/CSSNavPage";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/addons" component={AddonsNavPage} />
                <Route exact path="/advanced" component={AdvancedNavPage} />
                <Route exact path="/components" component={ComponentsNavPage} />
                <Route exact path="/css" component={CSSNavPage} />
                <Route exact path="/forms" component={FormsNavPage} />
                <Route exact path="/modals" component={ModalsNavPage} />
                <Route exact path="/navigation" component={NavigationNavPage} />
                <Route exact path="/tables" component={TablesNavPage} />
                <Route
                    render={function () {
                        return <h1>Not Found</h1>;
                    }}
                />
            </Switch>
        );
    }
}

export default Routes;
