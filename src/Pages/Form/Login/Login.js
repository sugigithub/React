import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../Input/Input";
import { FormElementsWrapper, SignupText, ErrorOutput } from "../Signup/style";
import { Wrapper, Image } from "./style";
import Button from "../button/button";
import loginBanner from "../../../assets/images/receipe.jpeg";

class Login extends Component {
  state = {
    formFields: {
      userName: {
        label: "Username",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "UserName..",
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
      const userName = this.state.formFields.userName.value;
      const password = this.state.formFields.password.value;
      for (let index = 0; index < this.state.users.length; index++) {
        let data = this.state.users;
        if (
          data[index].userName === userName &&
          data[index].password === password
        ) {
          this.setState({ errorMsg: null });
          sessionStorage.setItem("authenticated",true);
          this.props.onLoggingIn();
          this.props.history.push("/home");
          return;
        } else if (
          data[index].userName === userName ||
          data[index].password === password
        ) {
          this.setState({ errorMsg: "Username and Password dosent match" });
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
        <FormElementsWrapper>
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
