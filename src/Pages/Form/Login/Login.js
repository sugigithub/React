import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import axios from "axios";

import Spinner from "../../../CommonComponents/Spinner/Spinner";
import WithErrorHandler from "../../../hoc/withErrorHandler";
import Input from "../../../CommonComponents/Input/Input";
import { SignupText, ErrorOutput } from "../Signup/style";
import { Wrapper, Image, FormElementsWrapper } from "./style";
import Button from "../button/button";
import loginBanner from "../../../assets/images/receipe.jpeg";

class Login extends Component {
  state = {
    formFields: {
      email: {
        label: "E-mail",
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email..",
        },
        value: "",
        showHide: null,
      },
      password: {
        label: "Password",
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "******",
        },
        value: "",
        showHide: "Show",
      },
    },
    isFormFilled: true,
    users: null,
    errorMsg: null,
    loading: false,
  };

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("data")) || [];
    this.setState({ users: users });
  }

  validateData = () => {
    const fields = this.state.formFields;
    for (const data in this.state.formFields) {
      if (
        fields[data].value.replace(" ", "").length < 4 ||
        fields[data].value === undefined
      ) {
        this.setState({ isFormFilled: false });
        return false;
      }
    }
    this.setState({ isFormFilled: true });
    return true;
  };
  getIdTokenOnExpiry = (token) => {
    setTimeout(() => {
      const dataToPost = {
        grant_type: "refresh_token",
        refresh_token: token,
      };
      axios
        .post(
          "https://securetoken.googleapis.com/v1/token?key=AIzaSyAU_m_eq6oQBC5r68X2pcAH6zbl6WjWj8M",
          dataToPost
        )
        .then((res) => {
          console.log(res.data);
          const idToken = {
            idToken: res.data.id_token,
            refreshToken: res.data.refresh_token,
          };
          sessionStorage.setItem("token", JSON.stringify(idToken));
          this.props.onLoggingIn();
        });
    }, 1000);
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.validateData()) {
      const email = this.state.formFields.email.value;
      const password = this.state.formFields.password.value;
      for (let index = 0; index < this.state.users.length; index++) {
        let data = this.state.users;
        if (data[index].email === email && data[index].password === password) {
          this.setState({ errorMsg: null });
          sessionStorage.setItem("authenticated", true);
          const logIndata = {
            email: this.state.formFields.email.value,
            password: this.state.formFields.password.value,
            returnSecureToken: true,
          };
          this.setState({ loading: true });
          const url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAU_m_eq6oQBC5r68X2pcAH6zbl6WjWj8M";
          axios
            .post(url, logIndata)
            .then((res) => {
              this.setState({ loading: false });
              const token = {
                idToken: res.data.idToken,
                refreshToken: res.data.refreshToken,
              };
              sessionStorage.setItem("token", JSON.stringify(token));
              this.getIdTokenOnExpiry(token.refreshToken);
              this.props.onLoggingIn();
              this.props.history.push("/home");
            })
            .catch((err) => {
              this.setState({ loading: false });
            });
          return;
        } else if (
          data[index].email === email ||
          data[index].password === password
        ) {
          this.setState({ errorMsg: "Email and Password dosent match" });
          return;
        }
      }
      this.setState({ errorMsg: "User does not exist.." });
    }
  };

  saveValues = (event, data) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate.data };
    newstate.value = event.target.value;
    oldstate[data].value = newstate.value;
    this.setState({ formFields: oldstate });
  };

  toogleShow = (id) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate[id] };
    let config = { ...newstate.elementConfig };
    if (config.type === "password") {
      config.type = "text";
      newstate.showHide = "Hide";
    } else {
      config.type = "password";
      newstate.showHide = "Show";
    }
    newstate.elementConfig = config;
    oldstate[id] = newstate;
    this.setState({ formFields: oldstate });
  };

  logInHandler = (event) => {
    event.preventDefault();
    this.props.history.push("/sign-up");
  };
  render() {
    let form = Object.keys(this.state.formFields);
    const formElements = form.map((data) => (
      <Input
        key={data}
        formConfig={this.state.formFields[data]}
        id={data}
        saveValues={(event) => {
          this.saveValues(event, data);
        }}
        toogleShow={() => this.toogleShow(data)}
      />
    ));
    let errorMsg = <ErrorOutput></ErrorOutput>;
    if (!this.state.isFormFilled) {
      errorMsg = (
        <ErrorOutput>
          All the fields should have atleast 4 characters..
        </ErrorOutput>
      );
    } else if (this.state.errorMsg) {
      errorMsg = <ErrorOutput>{this.state.errorMsg}</ErrorOutput>;
    }
    let loginForm = <Spinner />;
    if (!this.state.loading) {
      loginForm = (
        <Fragment>
          {formElements}
          <Button
            onSubmit={(event) => this.onSubmitHandler(event)}
            text="Log In"
            text1="Sign Up"
            redirectTo={(event) => this.logInHandler(event)}
          />
        </Fragment>
      );
    }
    return (
      <Wrapper>
        <Image img={loginBanner} login={true} />
        <FormElementsWrapper autoComplete="off">
          <SignupText>Login</SignupText>
          {errorMsg}
          {loginForm}
        </FormElementsWrapper>
      </Wrapper>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLoggingIn: () => dispatch({ type: "LOGIN" }),
  };
};
export default WithErrorHandler(
  connect(null, mapDispatchToProps)(Login),
  axios
);
