import React from "react";

import {TopWrapper ,Recipe,ListorGridBox} from './style';
const RecipeScreenTop = (props) => {
  return (
    <TopWrapper>
      <Recipe>Latest Recipes</Recipe>
      <ListorGridBox listView = {props.listView} onClick = {props.clicked}>List View</ListorGridBox>
    </TopWrapper>
  );
};

export default RecipeScreenTop;
