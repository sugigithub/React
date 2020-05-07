import React from "react";

import {TopWrapper ,Recipe,Grid,List} from './style';
const RecipeScreenTop = (props) => {
  return (
    <TopWrapper>
      <Recipe>Latest Recipes</Recipe>
      <List listView = {!props.listView} onClick = {props.clicked}>List</List>
      <Grid listView = {props.listView} onClick = {props.clicked}>Grid</Grid>
    </TopWrapper>
  );
};

export default RecipeScreenTop;