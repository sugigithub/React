import React, { Component, Fragment } from "react";

import Spinner from "../../../CommonComponents/Spinner/Spinner";
import Input from "../../../CommonComponents/Input/Input";
import loginBanner from "../../../assets/images/receipe.jpeg";
import {
  Wrapper,
  Image,
  FormElementsWrapper,
  SignupText,
  ErrorOutput,
} from "./style";
import Button from "../button/button";

import axios from "axios";

class SignUp extends Component {
  state = {
    formFields: {
      name: {
        label: "Full Name",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name..",
          autocomplete: "off",
        },
        value: "",
        showHide: null,
      },
      email: {
        label: "Email",
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-mail address..",
        },
        value: "",
        showHide: null,
      },
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
      repeatPassword: {
        label: "Repeat Password",
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
    isPasswordMatch: true,
    errorMsg: null,
    signedInUsers: null,
    loading: false,
  };

  componentDidMount() {
    var storeData = JSON.parse(localStorage.getItem("data")) || [];
    this.setState({ signedInUsers: storeData });
  }

  saveValues = (event, data) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate.data };
    newstate.value = event.target.value;
    oldstate[data].value = newstate.value;
    this.setState({ formFields: oldstate });
  };
  validateData = () => {
    const fields = this.state.formFields;
    const userName = this.state.formFields.userName.value;
    const email = this.state.formFields.email.value;
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
    if (fields.password.value !== fields.repeatPassword.value) {
      this.setState({ isPasswordMatch: false });
      return false;
    } else {
      for (let i = 0; i < this.state.signedInUsers.length; i++) {
        if (this.state.signedInUsers[i].email === email) {
          this.setState({ errorMsg: "account already exists." });
          return false;
        } else if (this.state.signedInUsers[i].userName === userName) {
          this.setState({ errorMsg: "User name already taken." });
          return false;
        }
      }
    }
    this.setState({
      errorMsg: null,
      isPasswordMatch: true,
      isFormFilled: true,
    });
    return true;
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.validateData()) {
      var storeData = JSON.parse(localStorage.getItem("data")) || [];
      let logindata = {};
      for (const field in this.state.formFields) {
        logindata = {
          ...logindata,
          [field]: this.state.formFields[field].value,
        };
      }
      storeData.push(logindata);
      localStorage.setItem("data", JSON.stringify(storeData));
      const data = JSON.parse(localStorage.getItem("data"));
      this.setState({ signedInUsers: data });
      const signUpdata = {
        email: this.state.formFields.email.value,
        password: this.state.formFields.password.value,
        returnSecureToken: true,
      };
      this.setState({ loading: true });
      let url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAU_m_eq6oQBC5r68X2pcAH6zbl6WjWj8M";
      axios
        .post(url, signUpdata)
        .then((res) => {
          this.setState({ loading: false });
          this.props.history.push("/");
        })
        .catch((err) => {
          this.setState({ loading: false });
        });
    }
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

  signInHandler = (event) => {
    event.preventDefault();
    this.props.history.push("/");
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
    let errorOutput = <ErrorOutput></ErrorOutput>;
    if (!this.state.isFormFilled) {
      errorOutput = (
        <ErrorOutput>
          All the fields should have atleast 4 characters..
        </ErrorOutput>
      );
    } else if (!this.state.isPasswordMatch) {
      errorOutput = <ErrorOutput>Passwords dosent match..</ErrorOutput>;
    } else if (this.state.errorMsg) {
      errorOutput = <ErrorOutput>{this.state.errorMsg}</ErrorOutput>;
    }
    let formData = <Spinner />;
    if (!this.state.loading) {
      formData = (
        <Fragment>
          {formElements}
          <Button
            onSubmit={(event) => this.onSubmitHandler(event)}
            text="Sign Up"
            text1="Sign In"
            redirectTo={(event) => this.signInHandler(event)}
          />
        </Fragment>
      );
    }
    return (
      <Wrapper>
        <Image img={loginBanner} login={true} />
        <FormElementsWrapper autoComplete="off">
          <SignupText>Sign Up</SignupText>
          {errorOutput}
          {formData}
        </FormElementsWrapper>
      </Wrapper>
    );
  }
}

export default SignUp;
