import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";

import styles from "./SignIn.module.css";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const intialErrorValue = { state: false, message: "" };
  const [passwordError, setPasswordError] = useState(intialErrorValue);
  const [emailError, setEmailError] = useState(intialErrorValue);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    let checkwhetherErrorOccured = false;
    auth.signInWithEmailAndPassword(email, password).then(() => {
        setPasswordError(intialErrorValue);
        setEmailError(intialErrorValue);
        // navigate("/newpage");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setPasswordError({ state: true, message: "Wrong password" });
          setEmailError(intialErrorValue);
          checkwhetherErrorOccured = true;
        } else if (error.code === "auth/user-not-found") {
          setEmailError({ state: true, message: "User not found" });
          setPasswordError(intialErrorValue);
          checkwhetherErrorOccured = true;
        } else if (error.code === "auth/invalid-email") {
          setEmailError({ state: true, message: "Invalid email" });
          setPasswordError(intialErrorValue);
          checkwhetherErrorOccured = true;
        } else {
          setEmailError({ state: true, message: "Something went wrong" });
          setPasswordError({ state: true, message: "Something went wrong" });
          checkwhetherErrorOccured = true;
        }
      });
    if (!checkwhetherErrorOccured) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__content}>
        <div className={styles.login__wrapper}>
          <img
            className={styles.login__logo}
            src="/assets/google-image.png"
            alt="Google_image"
          />
          <p className={styles.login__title}>Sign in</p>
          <p className={styles.login__subtitle}>Continue to Gmail</p>
          <form className={styles.login__form} onSubmit={submitFormHandler}>
            <TextField
              value={email}
              onChange={emailChangeHandler}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              error={emailError.state}
              helperText={emailError.state ? emailError.message : ""}
              className={styles.login__input}
            />
            <TextField
              value={password}
              onChange={passwordChangeHandler}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              error={passwordError.state}
              helperText={passwordError.state ? passwordError.message : ""}
              className={styles.login__input}
            />
            <div className={styles.login__infoText}>
              Not your computer? Use guest mode to sign in privately?
              <a href="/">Learn More</a>
            </div>

            <div className={styles.login__buttons}>
              {/* Variant is basically used to fill the button of which it is chosen */}
              <Button
                className={styles.login__button}
                color="primary"
                onClick={() => navigate("/createAccount")}
              >
                Create Account
              </Button>
              <Button
                className={styles.login__button}
                color="primary"
                variant="contained"
                type="submit"
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;

// https://stackoverflow.com/questions/49769639/how-to-import-material-ui-iconsi-met-some-problems-using-material-ui-icons
