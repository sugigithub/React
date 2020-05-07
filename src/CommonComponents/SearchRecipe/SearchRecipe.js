import React from "react";

import {withTheme} from 'styled-components';

import { Wrapper, Input, RecipieBtn,SearchIcon } from "./style";

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
      <SearchIcon className="fa fa-search"></SearchIcon>
    </RecipieBtn>
  </Wrapper>
);

export default withTheme(searchRecipe);
