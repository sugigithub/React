import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { Route, Switch ,Redirect} from "react-router-dom";

import Login from "../Pages/Form/Login/Login";
import SignUp from "../Pages/Form/Signup/Signup";
import HomePageRoute from "./HomePageRoutes";

class Routes extends Component {
  requireAuth = (nextState, replace) => {
    console.log("123456");
    if (!this.props.isLoggedIn) {
      replace({
        pathname: "/",
      });
    }
  };
  render() {
    console.log(this.props.isLoggedIn);
    return (
      <Fragment>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route
            render={() =>
              this.props.isLoggedIn ? <HomePageRoute /> : <Redirect to="/" /> 
            }
          />
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
