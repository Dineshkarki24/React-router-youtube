import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./componets/Home";
import AboutPage from "./componets/About";
import Navbar from "./componets/Navbar";
import Services from "./componets/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./componets/product";
import PageNotFound from "./componets/PageNotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/about"
            render={props => <AboutPage {...props} name="dinesh" />}
          />
          <Route path="/service" exact component={Services} />
          <Route path="/product/:id" component={Product} />
          <Route path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
