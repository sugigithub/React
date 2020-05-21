import React, { Fragment } from "react";

import { Login, SignUpBtn, BtnArrow } from "./style";

import propTypes from 'prop-types';

const Button = (props) => {
  return (
    <Fragment>
      <Login onClick = {props.onSubmit}>{props.text}</Login>
      <SignUpBtn onClick = {props.redirectTo}>
        {props.text1}<BtnArrow className="fas fa-long-arrow-alt-right"></BtnArrow>
      </SignUpBtn>
    </Fragment>
  );
};

Button.propTypes = {
  onSubmit:propTypes.func,
  redirectTo:propTypes.func,
  text:propTypes.string,
  text1:propTypes.string,
}
export default Button;