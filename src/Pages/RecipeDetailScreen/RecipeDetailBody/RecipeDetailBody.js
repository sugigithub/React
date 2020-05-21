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
  Reviews,
  Ingredients,
  DescWrapper,
} from "./style";
import CheckBox from "./Checkbox/Checkbox";
import RatingsIcon from "../../RecipesScreen/Recipe/RatingsIcon/RatingsIcon";
import SocialShare from "../SocialShare/SocialShare";

const RecipeDetailBody = (props) => {
  const detail = Object.keys(props.data.details).map((data, index) => {
    if (data === "author") {
      return "";
    }
    return (
      <Details key={index}>
        {data} :<br />
        {props.data.details[data]}
      </Details>
    );
  });

  const ingredients = props.data.ingredients.map((data, index) => (
    <IngredientWrapper key={index}>
      <CheckBox index={index} ing={data} />
    </IngredientWrapper>
  ));

  const directions = props.data.directions.map((data, index) => (
    <DescWrapper key={index}>
      <DirectionStep>{index + 1}</DirectionStep>
      <RecipeDescription>{data}</RecipeDescription>
    </DescWrapper>
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
                color={index < props.data.ratings ? "#F3C63F" : "#E0E0E0"}
              />
            );
          })}
          <Reviews>({props.data.reviews} reviews)</Reviews>
        </Ratings>
        <RecipeImageWrapper>
          <RecipeImage
            src={require(`./${process.env.PUBLIC_URL}/../../../assets/images/${props.data.imgUrl}.jpg`)}
          />
        </RecipeImageWrapper>
        <RecipeDetails>
          {detail}
          <PrintButton>Print</PrintButton>
        </RecipeDetails>
      </RecipeCard>
      <RecipeDescription>{props.data.description}</RecipeDescription>
      <RecipeIngredient>Ingredients</RecipeIngredient>
      <Ingredients>{ingredients}</Ingredients>
      <RecipeIngredient>Directions</RecipeIngredient>
      {directions}
      <SocialShare />
    </DetailWrapper>
  );
};

export default RecipeDetailBody;
