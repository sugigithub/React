import React, { useEffect, useState } from "react";

import { RecipeDetailWrapper, RecipeDescWrapper } from "./style";
import RecipeDetailHeader from "./RecipeDetailHeader/RecipeDetailHeader";
import SideBar from "../../CommonComponents/Sidebar/Sidebar";
import RecipeDetailBody from "./RecipeDetailBody/RecipeDetailBody";

const RecipeDetailScreen = (props) => {
  const [searchText, setSearchText] = useState("");
  const recipeData = props.location.state;
  useEffect(() => {
    if (!recipeData) {
      props.history.push("*");
    }
  }, [props.history,recipeData]);

  
  const searchRecipeHandler = (event) => {
    setSearchText(event.target.value)    
  };

  const searchRecipe = (event) => {
    event.preventDefault();
    if (props.history.location.pathname === "/recipe-detail") {
      props.history.push({
        pathname: "/home",
        state: {
          searchText: searchText,
        },
        hash: "search",
      });
    }
  };

  return recipeData ? (
    <RecipeDetailWrapper>
      <RecipeDetailHeader headerImg={recipeData.detail.bannerImgUrl} />
      <RecipeDescWrapper>
        <RecipeDetailBody data={recipeData.detail} />
        <SideBar
          searchRecipeHandler={searchRecipeHandler}
          searchRecipe={(event)=>searchRecipe(event)}
          searchText={searchText}
        />
      </RecipeDescWrapper>
    </RecipeDetailWrapper>
  ) : null;
};

export default RecipeDetailScreen;
