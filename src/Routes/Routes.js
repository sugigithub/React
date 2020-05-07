import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "../Pages/Form/Login/Login";
import SignUp from "../Pages/Form/Signup/Signup";
import HomePageRoute from "./HomePageRoutes";
import PageNotFound from "../Pages/404/PageNotFound";

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route
            path={["/home", "/recipe-detail","/products","/products/:id"]} exact
            render={() =>
              this.props.isLoggedIn === "true" ? (
                <HomePageRoute />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Routes);
