import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./SignUp.css";

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    //do some fancy firebase sign-up shit.
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (auth) => {
        // if everything went smoothly without problems log this
        if (auth) {
          //i am using await to make the function wait until the displayName is changed, so the browser doesn't jump directly to the home page without a name to show
          await auth.user.updateProfile({
            displayName: name,
          });
          history.push("/");
        }
      })
      .catch(
        // if anything bad happens, alert it
        (error) => alert(error.message)
      );
  };

  return (
    <div className="signup">
      <Link to="/">
        <img
          className="signup__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>

      <div className="signup__container">
        <h1>Sign-Up</h1>
        <form>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="signup__signUpButton"
            type="submit"
            onClick={signUp}
          >
            Sign Up
          </button>
        </form>

        <p>
          By signing-up you agree to the AMAZON FAKE CLONE's Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>
      </div>
    </div>
  );
}

export default SignUp;
