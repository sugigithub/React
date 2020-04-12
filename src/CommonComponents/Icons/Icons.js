import React, { Fragment } from "react";
import { IconText } from "./style";

const icon = (props) => (
    
  <Fragment>
      
    <i className="fas fa-utensils" style={{ color: "white" }}></i>
    <IconText>{props.values.servings} servings</IconText>
    <i className="fas fa-clock" style={{ color: "white" }}></i>
    <IconText>{props.values.prepTime}</IconText>
    <i className="fas fa-user" style={{ color: "white" }}></i>
    <IconText>{props.values.author}</IconText>
  </Fragment>
);

export default icon;
