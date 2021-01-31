import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import InputFormPage from "./pages/InputFormPage/InputFormPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/submit" component={InputFormPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
