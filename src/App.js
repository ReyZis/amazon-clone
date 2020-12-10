import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, disaptch] = useStateValue();
  useEffect(
    // this will only run when the app compnent runs..
    () => {
      // this mean is like an event listener, it is lestining to the changes in the authentication state PS: its state is in firebase, not in this code
      auth.onAuthStateChanged((authUser) => {
        console.log("THE USER IS >>>", authUser);
        if (authUser) {
          // the user just looged in or the use was logger in
          disaptch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          // the user is logged out
          disaptch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    },
    //if you put some variables in this array, the use effect will run each time they change. but if you left it empty, the use effect will run just a single time when the app loads
    []
  );
  /* it is more like saying the variables in the array are affecting the app component, so everytime something change them, they are affected, and so the app component should be affected by that changes too, so he will reload and the function parameter should run again */
  return (
    // BEM
    <Router>
      <div className="App">
        {/* the switch component will help as rout around a lot of pages */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* the checkout rout */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* the main home route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
