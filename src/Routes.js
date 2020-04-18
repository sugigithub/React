import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RecipesScreen from "./Pages/RecipesScreen/Recipies";
import RecipeDetailScreen from "./Pages/RecipeDetailScreen/RecipeDetailScreen";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={RecipesScreen} />
        <Route path="/recipe-detail" exact component={RecipeDetailScreen} />
      </Switch>
    );
  }
}

export default Routes;
