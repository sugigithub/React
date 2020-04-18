import React from "react";
import {HeaderWrapper,HeaderImage} from './style';

const recipeDetailHeader = (props) => {
  return (
    <HeaderWrapper>
      <HeaderImage src = {props.headerImg}/>
    </HeaderWrapper>
  );
};

export default recipeDetailHeader;
