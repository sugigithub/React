import React from "react";
import { Wrapper, Input, RecipieBtn } from "./style";
const searchRecipe = (props) => (
  <Wrapper>
    <Input
      type="text"
      placeholder="Search for recipes"
      onChange={props.searchRecipeHandler}
      value={props.searchText}
      id="search"
    />
    <RecipieBtn onClick={props.searchRecipe}>
      <i className="fa fa-search" style={{ color: "#8dc63f" }}></i>
    </RecipieBtn>
  </Wrapper>
);

export default searchRecipe;
