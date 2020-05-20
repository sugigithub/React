import React from "react";

import { RecipieBarWrapper, Recipie, RecipieText } from "./style";

const recipieBar = (props) => {
  const recipie = props.recipeItem.map((item) => {
    return (
      <Recipie
        key={item.id}
        active={props.active === item.id}
        onClick={() => props.clicked(item.id)}
      >
        <RecipieText active={props.active === item.id}>{item.name}</RecipieText>
      </Recipie>
    );
  });
  return <RecipieBarWrapper show={props.show}>{recipie}</RecipieBarWrapper>;
};

export default recipieBar;
