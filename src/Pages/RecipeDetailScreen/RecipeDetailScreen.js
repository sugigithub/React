import React, { useEffect, useState } from "react";

import { RecipeDetailWrapper, RecipeDescWrapper } from "./style";
import RecipeDetailHeader from "./RecipeDetailHeader/RecipeDetailHeader";
import SideBar from "../../CommonComponents/Sidebar/Sidebar";
import RecipeDetailBody from "./RecipeDetailBody/RecipeDetailBody";

const RecipeDetailScreen = (props) => {
  const [searchText, setSearchText] = useState("");
  console.log(props);
  useEffect(() => {
    if (!recipeData) {
      props.history.push("/");
    }
  }, []);

  const recipeData = props.location.state;
  
  const searchRecipeHandler = (event) => {
    setSearchText(event.target.value)    
  };

  const searchRecipe = () => {
    if (props.history.location.pathname === "/recipe-detail") {
      props.history.push({
        pathname: "/",
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
          searchRecipe={searchRecipe}
          searchText={searchText}
        />
      </RecipeDescWrapper>
    </RecipeDetailWrapper>
  ) : null;
};

export default RecipeDetailScreen;
