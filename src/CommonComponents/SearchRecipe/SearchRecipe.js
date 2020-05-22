import React from "react";

import { withTheme } from "styled-components";

import { Wrapper, Input, RecipieBtn, SearchIcon ,SearchLabel} from "./style";

/**
 * search recipe based on use input
 * import and use as <SearchRecipe {...} />
 */
const searchRecipe = (props) => (
  <Wrapper>
    <SearchLabel htmlFor = "search">search</SearchLabel>
    <Input
      type="text"
      placeholder="Search for recipes"
      onChange={props.searchRecipeHandler}
      value={props.searchText}
      id="search"
    />
    <RecipieBtn onClick={props.searchRecipe}>
      search
      <SearchIcon className="fa fa-search"></SearchIcon>
    </RecipieBtn>
  </Wrapper>
);

export default withTheme(searchRecipe);
