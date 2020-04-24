import React, { Fragment } from "react";
import { Login, SignUpBtn, BtnArrow } from "./style";
const button = (props) => {
  return (
    <Fragment>
      <Login onClick = {props.onSubmit}>{props.text}</Login>
      <SignUpBtn onClick = {props.redirectTo}>
        {props.text1}<BtnArrow className="fas fa-long-arrow-alt-right"></BtnArrow>
      </SignUpBtn>
    </Fragment>
  );
};

export default button;