import React from "react";
import {HeaderWrapper} from './style';

const recipeDetailHeader = (props) => {
  return (
    <HeaderWrapper url = {require(`./${process.env.PUBLIC_URL}/../../../assets/images/${props.headerImg}.jpg`)} />
    
  );
};

export default recipeDetailHeader;
