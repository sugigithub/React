import React from "react";
import { IconText, Wrapper, Icons } from "./style";

const iconArray = [
  { id: "servings", value: "fas fa-utensils" },
  { id: "prepTime", value: "fas fa-clock" },
  { id: "author", value: "fas fa-user" },
];

const icon = (props) =>
  iconArray.map((name) => {
    return (
      <Wrapper key = {name.id}>
        <Icons className={name.value} color={props.color}></Icons>
        <IconText color={props.color}>{props.values[name.id]}</IconText>
      </Wrapper>
    );
  });

export default icon;
