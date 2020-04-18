import React from "react";

import {TopWrapper ,Recipe,ListorGridBox} from './style';
const RecipeScreenTop = (props) => {
  console.log(props);
  return (
    <TopWrapper>
      <Recipe>Latest Recipes</Recipe>
      <ListorGridBox listView = {props.listView} onClick = {props.clicked}>List View</ListorGridBox>
      <ListorGridBox listView = {!props.listView} onClick = {props.clicked}>Grid View</ListorGridBox>
    </TopWrapper>
  );
};

export default RecipeScreenTop;
