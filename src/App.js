import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
// import { SignIn, SignUp, HomePage, GmailAnimation } from "./components";
import { SignIn, SignUp, HomePage } from "./components";
import {IsUserRedirect, ProtectedRoute } from "./helpers/routes";

import { useAuthListener } from "./hooks";


function App() {
  const { user } = useAuthListener();
  const userData1 = window.localStorage.getItem("authUser");
  let email,displayName;
  if(userData1!==null){
    const userData = JSON.parse(userData1);
    email = userData.email;
    displayName = userData.displayName;
  }
  return (
    <Fragment>
      <Routes>
        <Route path="/signIn" element={<IsUserRedirect user={user}><SignIn /></IsUserRedirect>}/>
        <Route path="/createAccount" element={<IsUserRedirect user={user}><SignUp/></IsUserRedirect>}/>
        <Route path="/newUser" element={<ProtectedRoute user={user}><HomePage email={email} displayName={displayName}/></ProtectedRoute>}/>
        <Route path="*" element={<p>404 page</p>}/>
      </Routes>
      {/* <GmailAnimation/> */}
    </Fragment>
  );
}

export default App;
