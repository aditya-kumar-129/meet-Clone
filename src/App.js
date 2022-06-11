import { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.js/HomePage";
import SignIn from "./components/SignIn/SignIn";
import Signup from "./components/SignUp/SignUp";
import { auth } from "./lib/firebase";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);
  return (
    <Fragment>
      <Routes>
        {/* {currentUser && <Route path="/newUser" element={<p>New User Page</p>} />} */}
        {currentUser && (
          <Route
            path="/newUser"
            element={
                <HomePage userData={currentUser} />
            }
          />
        )}
        <Route path="/" element={<SignIn />} />
        <Route path="createAccount" element={<Signup />} />
        <Route path="*" element={<p>404 page</p>} />
      </Routes>
    </Fragment>
  );
}

export default App;
