import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp, HomePage, LoadingGmailAnimation } from "./components";
import { useLocalContext } from "./context/context";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

import { useAuthListener } from "./hooks";

function App() {
  const { appState, setAppState } = useLocalContext();
  const { user } = useAuthListener();
  const userData1 = window.localStorage.getItem("authUser");
  let email, displayName;
  if (userData1 !== null) {
    const userData = JSON.parse(userData1);
    email = userData.email;
    displayName = userData.displayName;
  }

  useEffect(() => {
    if (appState === "loading") {
      setTimeout(() => {
        setAppState("home");
      }, 500);
    }
  });

  return (
    <Fragment>
      <Routes>
        <Route
          path="/signIn"
          element={
            <IsUserRedirect user={user}>
              {appState === "logIn" && <SignIn />}
            </IsUserRedirect>
          }
        />

        <Route
          path="/newUser"
          element={
            <ProtectedRoute user={user}>
              {appState === "loading" && <LoadingGmailAnimation />}
              {appState === "home" && (
                <HomePage email={email} displayName={displayName} />
              )}
            </ProtectedRoute>
          }
        />

        <Route
          path="/createAccount"
          element={
            <IsUserRedirect user={user}>
              <SignUp />
            </IsUserRedirect>
          }
        />

        <Route path="*" element={<p>404 page</p>} />
      </Routes>
    </Fragment>
  );
}

export default App;
