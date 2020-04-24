import React, { Fragment } from "react";

import { Switch, Route ,Redirect} from "react-router-dom";

import Navigation from "../CommonComponents/NavigationItems/NavigationItems";
import RecipesScreen from "../Pages/RecipesScreen/Recipies";
import RecipeDetailScreen from "../Pages/RecipeDetailScreen/RecipeDetailScreen";

const HomePageRoute = () => {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route path="/home" exact component={RecipesScreen} />
        <Route path="/recipe-detail" exact component={RecipeDetailScreen} />
        <Redirect to="/home" />
      </Switch>
    </Fragment>
  );
};

export default HomePageRoute;
