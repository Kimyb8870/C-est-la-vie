import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import InputFormPage from "./pages/InputFormPage/InputFormPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const AppRouter = ({ user }) => {
  let history = useHistory();
  history.replace("/login");

  return (
    <Switch>
      {user ? (
        <>
          <Route exact path="/login">
            <LoginPage user={user} />
          </Route>
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/submit" component={InputFormPage} />
          <Route exact path="/home" component={MainPage} user={user} />
        </>
      ) : (
        <Route exact path="/login" component={LoginPage} />
      )}
    </Switch>
  );
};

export default AppRouter;
