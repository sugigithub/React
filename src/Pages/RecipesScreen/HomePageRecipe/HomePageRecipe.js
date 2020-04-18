import React, { Fragment } from "react";

import Recipe from "../Recipe/Recipie";
import RecipeScreenTop from "../RecipeScreenTop/RecipeScreenTop";
import RecipeBanner from "../../RecipeBanner/RecipeBanner";
import SideBar from "../../../CommonComponents/Sidebar/Sidebar";
import { RecipesScreenWrapper, RecipeWrapper ,} from "./style";
import RecipeNotFound from '../RecipeNotfound/RecipeNotFound';

const homePageRecipe = (props) => {
  console.log(props)
  return (
    <Fragment>
      <RecipeBanner headerData={props.headerData} />
      <RecipesScreenWrapper>
        <RecipeWrapper>
          <RecipeScreenTop
            listView={props.listView}
            clicked={props.listViewHandler}
          />{
            props.recipesDetail.length === 0?<RecipeNotFound viewAllRecipe = {props.viewAllRecipe}/>
            :
          <Recipe
          recipedetails={props.recipesDetail}
          listView={props.listView}
          showDetailHandler = {props.showDetailHandler}
        />
          }
          
        </RecipeWrapper>
        <SideBar searchRecipeHandler = {props.searchRecipeHandler}/>
      </RecipesScreenWrapper>
    </Fragment>
  );
};

export default homePageRecipe;
