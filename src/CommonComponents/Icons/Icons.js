import React, { Fragment } from "react";
import { IconText } from "./style";

const icon = (props) => (
  // Object.keys(props.values).map(value =>{
  //   return (
  //     <Fragment>
  //     <i className="fas fa-utensils" style={{ color: props.color }}></i>
  //   <IconText color = {props.color}>{props.values.servings} servings</IconText>
  //   </Fragment>
  //   )
  // })
  <Fragment>
    <i className="fas fa-user" style={{ color: props.color }}></i>
    <IconText color = {props.color}>{props.values.author}</IconText>
    <i className="fas fa-utensils" style={{ color: props.color }}></i>
    <IconText color = {props.color}>{props.values.servings} servings</IconText>
    <i className="fas fa-clock" style={{ color: props.color }}></i>
    <IconText color = {props.color}>{props.values.prepTime}</IconText>
  </Fragment>
);

export default icon;
