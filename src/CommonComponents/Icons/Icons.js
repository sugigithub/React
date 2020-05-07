import React, { Fragment } from "react";
import { IconText, Wrapper } from "./style";

const icon = (props) => (
  <Fragment>
    <Wrapper>
      <i className="fas fa-utensils" style={{ color: props.color ,fontSize:"12px"}}></i>
      <IconText color={props.color}>{props.values.servings}</IconText>
    </Wrapper>
    <Wrapper>
      <i className="fas fa-clock" style={{ color: props.color ,fontSize:"12px"}}></i>
      <IconText color={props.color}>{props.values.prepTime}</IconText>
    </Wrapper>
    <Wrapper>
      <i className="fas fa-user" style={{ color: props.color ,fontSize:"12px"}}></i>
      <IconText color={props.color}>{props.values.author}</IconText>
    </Wrapper>
  </Fragment>
);

export default icon;
