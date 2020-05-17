import React, { Fragment } from "react";

import { Switch, Route } from "react-router-dom";

import Navigation from "../CommonComponents/NavigationItems/NavigationItems";
import RecipesScreen from "../Pages/RecipesScreen/Recipies";
import RecipeDetailScreen from "../Pages/RecipeDetailScreen/RecipeDetailScreen";
import Products from '../Pages/Products/Products';
import SubmitRecipe from '../Pages/SubmitRecipe/SubmitRecipe';

const HomePageRoute = () => {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route path="/home" exact component={RecipesScreen} />
        <Route path="/recipe-detail" exact component={RecipeDetailScreen} />
        <Route path = "/products" component = {Products} />
        <Route path="/submit-recipe" exact component={SubmitRecipe} />
      </Switch>
    </Fragment>
  );
};

export default HomePageRoute;
