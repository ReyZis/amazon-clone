import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Header />
        {/* the switch component will help as rout around a lot of pages */}
        <Switch>
          {/* the checkout rout */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* the main home route */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
