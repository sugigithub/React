import React from "react";

import styled from "styled-components";
import RecipeImage from '../../../assets/images/recipeThumb-01.jpg';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 220px;
`;

const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
`;
const recipeDetailHeader = (props) => {
  return (
    <HeaderWrapper>
      <HeaderImage src = {RecipeImage}/>
    </HeaderWrapper>
  );
};

export default recipeDetailHeader;
