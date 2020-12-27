import React, { useEffect } from "react";
import "./App.css";
// components
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import SignUp from "./SignUp";
import Payment from "./Payment";
import Orders from "./Orders";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//functions
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
    "pk_test_51I1jKvEZ6hfegs2uaEv5BLZfSfXBdNs5DOsqTZfCw5W8EI4357IctQcP4HfMIwCZ7BQslLFiKgifnKmJm40L3fVy00CAQ3ymEl"
);

function App() {
    const [{}, disaptch] = useStateValue();
    useEffect(
        // this will only run when the app compnent runs..
        () => {
            // this mean is like an event listener, it is lestining to the changes in the authentication state PS: its state is in firebase, not in this code
            auth.onAuthStateChanged((authUser) => {
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
                    <Route path="/orders">
                        <Header />
                        <Orders />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    {/* the checkout rout */}
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
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
