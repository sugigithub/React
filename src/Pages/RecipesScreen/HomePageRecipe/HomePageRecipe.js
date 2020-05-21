import React, { Fragment } from "react";

import Recipe from "../Recipe/Recipie";
import RecipeScreenTop from "../RecipeScreenTop/RecipeScreenTop";
import RecipeBanner from "../../RecipeBanner/RecipeBanner";
import SideBar from "../../../CommonComponents/Sidebar/Sidebar";
import { RecipesScreenWrapper, RecipeWrapper } from "./style";
import RecipeNotFound from "../RecipeNotfound/RecipeNotFound";
import Loader from '../../../CommonComponents/Spinner/Spinner';

const homePageRecipe = (props) => {
  let cards;
  if(props.loading){
     cards = <Loader />;
  }
  if (props.recipesDetail) {
    cards = (
      <RecipesScreenWrapper>
      <RecipeWrapper>
        <RecipeScreenTop
          listView={props.listView}
          clicked={props.listViewHandler}
        />
        {props.recipesDetail.length === 0 ? (
          <RecipeNotFound viewAllRecipe={props.viewAllRecipe} />
        ) : (
          <Recipe
            recipedetails={props.recipesDetail}
            listView={props.listView}
            showDetailHandler={props.showDetailHandler}
          />
        )}
      </RecipeWrapper>
        <SideBar
          searchRecipeHandler={props.searchRecipeHandler}
          searchText={props.searchText}
          id="search"
        />
      </RecipesScreenWrapper>
    );
  }
  return (
    <Fragment>
      <RecipeBanner headerData={props.headerData} />
      {cards}
    </Fragment>
  );
};

export default homePageRecipe;
