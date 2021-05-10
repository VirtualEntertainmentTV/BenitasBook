import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://i.ibb.co/0Q5y4vZ/Benitas-Book-trans.png" alt="" />

        <img
          className="logo__name"
          src="https://i.ibb.co/dp9Q9Kk/BB-logo.png"
          alt=""
        />
      </div>

      <Button className="login__button" onClick={signIn} type="submit">
        Turn The Page
      </Button>
    </div>
  );
}

export default Login;
