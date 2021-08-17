import React, { useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import homePage from "../pages/homePage/homePage";

import Loader from "../atoms/loader";
import firebase from "../firebase";
import { GlobalContext } from "../context/GlobalState";
import ViewDetails from "../pages/viewDetails/detail";
export default (props) => {
  let { history } = props;
  const state = useContext(GlobalContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user && user.uid !== null) {
        state.loader = false;
        state.userDetail = user && user.uid;
        history.push("/");
      } else {
        state.loader = false;
        history.push("/login");
      }
    });
  }, [state, history]);
  return (
    <div>
      {!state.loader ? (
        <Switch>
          <Route path="/" exact component={homePage} />
          {state.userDetail && (
            <Route path="/:id" exact component={ViewDetails} />
          )}
        </Switch>
      ) : (
        <Switch>
          <Route path="/" component={Loader} />
        </Switch>
      )}
    </div>
  );
};
