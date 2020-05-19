import React from "react";

import { TopWrapper, Recipe, GridListBtn ,Grid,List} from "./style";
const RecipeScreenTop = (props) => {
  console.log(props)
  return (
    <TopWrapper>
      <Recipe>Latest Recipes</Recipe>
      {/* <List listView = {!props.listView} onClick = {props.clicked}>List</List>
      <Grid listView = {props.listView} onClick = {props.clicked}>Grid</Grid> */}
      <GridListBtn listView = {props.listView} onClick = {props.clicked}>
        <Grid listView = {props.listView}>Grid</Grid>
        <List listView = {props.listView}>List</List>
      </GridListBtn>
    </TopWrapper>
  );
};

export default RecipeScreenTop;
