import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import LogInPage from "../pages/logInPage/logInPage";
import SignUpPage from "../pages/signUpPage/signUppage";
import PrivateRoutes from "./privateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LogInPage} />
      <Route path="/sign-up" exact component={SignUpPage} />
      <Route path="/" component={PrivateRoutes} />
    </Switch>
  );
};

export default withRouter(Routes);
