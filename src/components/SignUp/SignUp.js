import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signup__container}>
      <div className={styles.signup}>
        <div className={styles.signup__container}>
          <div className={styles.signup__left}>
            <img
              className={styles.login__logo}
              src="/assets/google-image.png"
              alt="Google_image"
            />
            <h1 className={styles.signup__heading}>
              Create your Google Account
            </h1>
            <h1 className={styles.signup__subheading}>Continue to Gmail</h1>
            <form className={styles.signup__inputs}>
              <div className={styles.signup__nameInputs}>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  type="text"
                  className={styles.signup__nameInput}
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  type="text"
                  className={styles.signup__nameInput}
                />
              </div>
              <TextField
                id="outlined-basic"
                label="Email"
                fullWidth
                variant="outlined"
                type="email"
                helperText="You can use letters, numbers & periods"
              />
              <div className={styles.signup__passwordInputs}>
                <div className={styles.signup__passwordWrapper}>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                    className={styles.signup__passwordInput}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    className={styles.signup__passwordInput}
                  />
                </div>
                <p className={styles.signup__helpertext}>
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Show Password"
                />
              </div>
              <div className={styles.signup__buttons}>
                <Button
                  className={styles.signup__button}
                  color="primary"
                  variant="text"
                >
                  Sign In instead
                </Button>

                <Button
                  className={styles.signup__button}
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Create
                </Button>
              </div>
            </form>
          </div>
          <figure className={styles.signup__figure}>
            <img
              className={styles.signup__figureImg}
              src="/assets/account.svg"
              alt="account"
            />

            <figcaption className={styles.signup__figcaption}>
              One account. All of google working for you
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
