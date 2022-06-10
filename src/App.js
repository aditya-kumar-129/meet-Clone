import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Signup from "./components/SignUp/SignUp";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="createAccount" element={<Signup />} />
      </Routes>
    </Fragment>
  );
}

export default App;
