import React from "react";

import { RecipieBarWrapper, Recipie, RecipieText } from "./style";

const recipieBar = (props) => {
  const recipie = props.recipeItem.map((item) => {
    return (
      <Recipie
        key={item.id}
        active={props.active === item.id ? true : false}
        onClick={() => props.clicked(item.id)}
      >
        <RecipieText active={props.active === item.id ? true : false}>
          {item.name}
        </RecipieText>
      </Recipie>
    );
  });
  return <RecipieBarWrapper show={props.show}>{recipie}</RecipieBarWrapper>;
};

export default recipieBar;
