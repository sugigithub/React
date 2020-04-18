import React from "react";
import { Wrapper, Input, RecipieBtn } from "./style";
const searchRecipe = (props) => (
  <Wrapper>
    <Input type="text" placeholder="Search for recipes" onChange = {props.searchRecipeHandler}/>
    <RecipieBtn>
      <i className="fa fa-search"></i>
    </RecipieBtn>
  </Wrapper>
);

export default searchRecipe;
