import React from "react";
import { SideBarWrapper } from "./style";
import SearchBar from '../SearchRecipe/SearchRecipe';
import Author from '../Author/Author';

const sidebar = (props) => (
  <SideBarWrapper>
    <SearchBar searchRecipeHandler = {props.searchRecipeHandler} searchText = {props.searchText} searchRecipe = {props.searchRecipe}/>
    <Author />
  </SideBarWrapper>
);

export default sidebar;