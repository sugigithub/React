import React from "react";

import {
  RecipeDescription,
  RecipeCard,
  RecipeName,
  RecipeImageWrapper,
  RecipeImage,
  RecipeDetails,
  RecipeIngredient,
  PrintButton,
  DetailWrapper,
  Details,
  IngredientWrapper,
  DirectionStep,
  Ratings,
  Reviews
} from "./style";
import CheckBox from "./Checkbox/Checkbox";
import RatingsIcon from "../../RecipesScreen/Recipe/RatingsIcon/RatingsIcon";
import SocialShare from '../SocialShare/SocialShare';


const RecipeDetailBody = (props) => {

  const detail = Object.keys(props.data.details).map((data,index) => {
    return (
      <Details key = {index}>
        {data} :<br />
        {props.data.details[data]}
      </Details>
    );
  });

  const ingredients = props.data.ingredients.map((data, index) => (
    <IngredientWrapper key = {index}>
      <CheckBox index={index} ing={data} />
    </IngredientWrapper>
  ));

  const directions = props.data.directions.map((data, index) => (
    <IngredientWrapper key = {index}>
      <DirectionStep>{index+1}</DirectionStep>
      <RecipeDescription>{data}</RecipeDescription>
    </IngredientWrapper>
  ));
  
  return (
    <DetailWrapper>
      <RecipeCard>
        <RecipeName>{props.data.name}</RecipeName>
        <Ratings>
          {[null, null, null, null, null].map((_, index) => {
            return (
              <RatingsIcon
                key={index}
                color={
                  index < props.data.details.ratings ? "#F3C63F" : "#E0E0E0"
                }
              />
            );
          })}
          <Reviews>({props.data.reviews} reviews)</Reviews> 
        </Ratings>
        <RecipeImageWrapper>
          <RecipeImage src={props.data.imgUrl} />
        </RecipeImageWrapper>
        <RecipeDetails>
          {detail}
          <PrintButton>Print</PrintButton>
        </RecipeDetails>
      </RecipeCard>
      <RecipeDescription>{props.data.description}</RecipeDescription>
      <RecipeIngredient>Ingredients</RecipeIngredient>
      {ingredients}
      <RecipeIngredient>Directions</RecipeIngredient>
      {directions}
      <SocialShare/>
    </DetailWrapper>
  );
};

export default RecipeDetailBody;
