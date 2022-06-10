import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SignIn.module.css";

const Signin = () => {
  const navigate = useNavigate();

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
          <form className={styles.login__form}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              className={styles.login__input}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
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
