import React from "react";

import {
  RecipieWrapper,
  RecipieCard,
  Image,
  RecipieTitleBox,
  RecipieName,
  RecipeDescription,
  Rating,
  Duration,
  Time,
  IconsWrapper,
  ImageWrapper
} from "./style";
import RatingsIcon from "./RatingsIcon/RatingsIcon";
import Icon from "../../../CommonComponents/Icons/Icons";
import CardsOverlay from './CardsOverlay/CardsOverlay';

const recipe = (props) => {
  return (
    <RecipieWrapper>
      {props.recipedetails.map((recipe) => {
        return (
          <RecipieCard key={recipe.id} listView={props.listView}>
            <ImageWrapper>
            <Image src={recipe.imgUrl} listView={props.listView} />
            <CardsOverlay listView = {props.listView}/>
            </ImageWrapper>
            <RecipieTitleBox>
              <RecipieName listView={props.listView}>{recipe.name}</RecipieName>
              <RecipeDescription listView={props.listView}>
                {recipe.description}
              </RecipeDescription>
              <Rating>
                {[null, null, null, null, null].map((_, index) => {
                  return (
                    <RatingsIcon
                      key={index}
                      color={index < recipe.details.ratings ? "#F3C63F" : "#E0E0E0"}/>
                  );
                })}
              </Rating>
              {props.listView ? (
                <IconsWrapper>
                  <Icon values={recipe.details} color="#909090" />
                </IconsWrapper>
              ) : (
                <Duration>
                  <i
                    className="fas fa-clock"
                    style={{ color: "gray", fontSize: "14px" }}
                  ></i>
                  <Time>{recipe.details.prepTime}</Time>
                </Duration>
              )}
            </RecipieTitleBox>
          </RecipieCard>
        );
      })}
    </RecipieWrapper>
  );
};

export default recipe;
