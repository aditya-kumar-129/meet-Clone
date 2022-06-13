import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp, Home, LoadingGmailAnimation } from "./components";
import { useLocalContext } from "./context/context";
import { useMailContext } from "./context/MailContext";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

import { useAuthListener } from "./hooks";

function App() {
  const { appState, setAppState } = useLocalContext();
  const { onScreenMails } = useMailContext();
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
      }, 5000);
    }
  });

  return (
    <Fragment>
      <Routes>
        <Route
          path="/signIn"
          element={<IsUserRedirect user={user}>{appState === "logIn" && <SignIn />}</IsUserRedirect>}
        />

        <Route
          path="/newUser"
          element={
            <ProtectedRoute user={user}>
              {appState === "loading" && <LoadingGmailAnimation />}
              {appState === "home" && (<Home email={email} displayName={displayName} />)}
            </ProtectedRoute>
          }
        />

        <Route
          path="/createAccount"
          element={<IsUserRedirect user={user}><SignUp /></IsUserRedirect>}
        />
        {onScreenMails.map((value, index) => (
          <Route key={index} path={`/mail/${value.id}`}
            element={<Home email={email} displayName={displayName} mailData={value} showMail={false}/>}
          />
        ))}
        <Route path="*" element={<p>404 page</p>} />
      </Routes>
    </Fragment>
  );
}

export default App;
