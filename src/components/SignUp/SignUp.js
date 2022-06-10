import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const intialErrorValue = { state: false, message: "" };
  const [passwordError, setPasswordError] = useState(intialErrorValue);
  const [emailError, setEmailError] = useState(intialErrorValue);

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const newUserData = {
      firstName,
      lastName,
      email,
      password,
    };
    if (password !== confirmPassword) {
      setPasswordError({ state: true, message: "Passwords do not match" });
      setEmailError(intialErrorValue);
      setConfirmPassword("");
      return;
    } else {
      console.log(newUserData);
      setPasswordError(intialErrorValue);
      setEmailError(intialErrorValue);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

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
            <form
              className={styles.signup__inputs}
              onSubmit={submitFormHandler}
            >
              <div className={styles.signup__nameInputs}>
                <TextField
                  value={firstName}
                  onChange={firstNameChangeHandler}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  type="text"
                  className={styles.signup__nameInput}
                />
                <TextField
                  value={lastName}
                  onChange={lastNameChangeHandler}
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  type="text"
                  className={styles.signup__nameInput}
                />
              </div>
              <TextField
                value={email}
                onChange={emailChangeHandler}
                id="outlined-basic"
                label="Email"
                fullWidth
                variant="outlined"
                type="email"
                error={emailError.state}
                helperText={
                  emailError.state
                    ? emailError.message
                    : "You can use letters, numbers & periods"
                }
              />
              <div className={styles.signup__passwordInputs}>
                <div className={styles.signup__passwordWrapper}>
                  <TextField
                    value={password}
                    onChange={passwordChangeHandler}
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                    className={styles.signup__passwordInput}
                    error={passwordError.state}
                  />
                  <TextField
                    value={confirmPassword}
                    onChange={confirmPasswordChangeHandler}
                    id="outlined-basic"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    className={styles.signup__passwordInput}
                    error={passwordError.state}
                  />
                </div>
                <p
                  className={`${styles.signup__helpertext} ${
                    passwordError && styles.signup__error
                  }`}
                >
                  {passwordError.state
                    ? passwordError.message
                    : "Use 8 or more characters with a mix of letters, numbers & symbols"}
                  {/* Use 8 or more characters with a mix of letters, numbers & symbols */}
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
                  onClick={() => navigate("/")}
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
