import React from "react";

import {
  IngredientWrapper,
  RecipeDescription,
  DirectionStep,
  RecipeDetailWrapper,
  RecipeCard,
  RecipeName,
  RecipeImageWrapper,
  RecipeImage,
  RecipeDetails,
  RecipeIngredient,
  Details,
  PrintButton,
} from "./style";
import RecipeDetailHeader from "./RecipeDetailHeader/RecipeDetailHeader";


const RecipeDetailScreen = (props) => {
  const detail = Object.keys(props.detail.details).map((data) => {
    return (
      <Details>
        {data} :<br />
        {props.detail.details[data]}
      </Details>
    );
  });
  console.log(props.detail.details.servings);

  const ingredients = props.detail.ingredients.map((data, index) => (
    <IngredientWrapper>
      <span>
        <i
          className="fas fa-check-square"
          style={{
            color: "#8DC63F",
            border: "2px solid #8DC63F",
            fontSize: "20px",
            marginRight: "30px",
          }}
        ></i>
      </span>
      <RecipeDescription>{data}</RecipeDescription>
    </IngredientWrapper>
  ));
  const directions = props.detail.directions.map((data, index) => (
    <IngredientWrapper>
      <DirectionStep>{index}</DirectionStep>
      <RecipeDescription>{data}</RecipeDescription>
    </IngredientWrapper>
  ));

  return (
    <RecipeDetailWrapper>
      <RecipeDetailHeader />
      <RecipeCard>
        <RecipeName>Chunky Beef Stew</RecipeName>
        <RecipeImageWrapper>
          <RecipeImage src={props.detail.imgUrl} />
        </RecipeImageWrapper>
        <RecipeDetails>
          {detail}
          <PrintButton>Print</PrintButton>
        </RecipeDetails>
      </RecipeCard>
      <RecipeDescription>{props.detail.description}</RecipeDescription>
      <RecipeIngredient>Ingredients</RecipeIngredient>
      {ingredients}
      <RecipeIngredient>Directions</RecipeIngredient>
      {directions}
    </RecipeDetailWrapper>
  );
};

export default RecipeDetailScreen;
