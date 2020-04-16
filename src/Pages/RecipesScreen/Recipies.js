import React, { Component, Fragment } from "react";

import { recipesDetail } from "../../RecipeData/RecipeData";
import { RecipesScreenWrapper, RecipeWrapper, SideBar } from "./style";
import Recipe from "./Recipe/Recipie";
import Author from "../../CommonComponents/Author/Author";
import SearchBar from "../../CommonComponents/SearchRecipe/SearchRecipe";
import RecipeScreenTop from "./RecipeScreenTop/RecipeScreenTop";
import RecipeDetailScreen from "../RecipeDetailScreen/RecipeDetailScreen";
import RecipeBanner from "../RecipeBanner/RecipeBanner";

class recipesScreen extends Component {
  state = {
    listView: false,
  };

  listViewHandler = () => {
    const oldState = this.state.listView;
    this.setState({ listView: !oldState });
  };

  ingredientSelected = (id) => {
    console.log(id);
  };

  render() {
    console.log(recipesDetail);
    return (
      <Fragment>
        <RecipesScreenWrapper>
        <RecipeBanner headerData={recipesDetail.slice(0, 4)} />
          <RecipeWrapper>
            <RecipeScreenTop
              listView={this.state.listView}
              clicked={this.listViewHandler}/>
            <Recipe
              recipedetails={recipesDetail}
              listView={this.state.listView}/>
            <RecipeDetailScreen
              detail={recipesDetail[0]}
              clicked={this.ingredientSelected}/>
          </RecipeWrapper>
          <SideBar>
            <SearchBar />
            <Author />
          </SideBar>
        </RecipesScreenWrapper>
      </Fragment>
    );
  }
}

export default recipesScreen;
