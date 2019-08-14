import "./App.css";

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Loadable from "react-loadable";
import LoadingScreen from "./components/LoadingScreen";
import React from "react";

const Manage = Loadable({
  loader: () => import("./pages/Manage/Manage"),
  loading: LoadingScreen
});

const Requests = Loadable({
  loader: () => import("./pages/Requests/Requests"),
  loading: LoadingScreen
});

const Review = Loadable({
  loader: () => import("./pages/Review/Review"),
  loading: LoadingScreen
});

const App = () => {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <Route exact path="/" render={() => <Redirect to="/schemes/1" />} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/schemes/:schemeId/:attrId?" component={Manage} />
          <Route
            exact
            path="/schemes/:schemeId/:attrId/edit"
            component={Manage}
          />

          <Route exact path="/requests/:filter?" component={Requests} />
        </React.Fragment>
      </Switch>
    </Router>
  );
};
export default App;
