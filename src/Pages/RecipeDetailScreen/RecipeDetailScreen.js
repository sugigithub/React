import React, { useEffect } from "react";

import { RecipeDetailWrapper, RecipeDescWrapper } from "./style";
import RecipeDetailHeader from "./RecipeDetailHeader/RecipeDetailHeader";
import SideBar from "../../CommonComponents/Sidebar/Sidebar";
import RecipeDetailBody from "./RecipeDetailBody/RecipeDetailBody";

const RecipeDetailScreen = (props) => {

  useEffect(() => {
    console.log(props)
    
  },[]);
  const recipeData = props.location.state;

  return (
    <RecipeDetailWrapper>
      <RecipeDetailHeader headerImg={recipeData.detail.bannerImgUrl} />
      <RecipeDescWrapper>
        <RecipeDetailBody data={recipeData.detail} />
        <SideBar />
      </RecipeDescWrapper>
    </RecipeDetailWrapper>
  );
};

export default RecipeDetailScreen;
