import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp, HomePage } from "./components";
import {IsUserRedirect, ProtectedRoute } from "./helpers/routes";

import { useAuthListener } from "./hooks";

function App() {
  const { user } = useAuthListener();

  return (
    <Fragment>
      <Routes>
        <Route path="/signIn" element={<IsUserRedirect user={user}><SignIn /></IsUserRedirect>}/>
        <Route path="/createAccount" element={<IsUserRedirect user={user}><SignUp/></IsUserRedirect>}/>
        <Route path="/newUser" element={<ProtectedRoute user={user}><HomePage userData={user}/></ProtectedRoute>}/>
        <Route path="*" element={<p>404 page</p>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
