import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";

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

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.validateData()) {
      const email = this.state.formFields.email.value;
      const password = this.state.formFields.password.value;
      for (let index = 0; index < this.state.users.length; index++) {
        let data = this.state.users;
        if (
          data[index].email === email &&
          data[index].password === password
        ) {
          this.setState({ errorMsg: null });
          sessionStorage.setItem("authenticated", true);
          this.props.onLoggingIn();
          const logIndata = {
            email: this.state.formFields.email.value,
            password: this.state.formFields.password.value,
            returnSecureToken: true,
          };
          const url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAU_m_eq6oQBC5r68X2pcAH6zbl6WjWj8M";
          axios
            .post(url, logIndata)
            .then((res) => {
              console.log(res);
              // this.props.history.push("/");
              this.props.history.push("/home");
            })
            .catch((err) => {
              // console.log(err);
              this.setState({errorMsg:err.response.data.error.message})
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
    return (
      <Wrapper>
        <Image img={loginBanner} login={true} />
        <FormElementsWrapper autoComplete="off">
          <SignupText>Login</SignupText>
          {errorMsg}
          {formElements}
          <Button
            onSubmit={(event) => this.onSubmitHandler(event)}
            text="Log In"
            text1="Sign Up"
            redirectTo={(event) => this.logInHandler(event)}
          />
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
export default connect(null, mapDispatchToProps)(Login);
