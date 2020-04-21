import styled from "styled-components";

export const RecipeCard = styled.div`
  margin-top: -20px;
  background-color: #f8f8f8;
  position: relative;
  :before{
    content:"";
    position: absolute;
      top: -48px;
      right: 0;
      border-width: 0 48px 48px 0;
      border-style: solid;
      border-color: #e0e0e0 transparent;
      z-index: 1;
  }
  :after{
    content: "";
    position: absolute;
    top: -48px;
    left: 0;
    right: 48px;
    border-width: 24px;
    border-style: solid;
    border-color: #f8f8f8;
    z-index: 1;
  }
`;
export const Details = styled.p`
  border-right: 1px solid #d8d8d8;
  text-transform: capitalize;
  padding: 5px 10px;
  line-height: 20px;
  color: #707070;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 20px;
  &:nth-last-child(2) {
    border-right: none;
    flex: 2;
  }
`;
export const DirectionStep = styled.div`
  color: #999;
  font-weight: 700;
  font-size: 16px;
  background-color: #f4f4f4;
  padding: 10px;
  margin-right: 25px;
`;

export const IngredientWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0px 8px 120px;
  border-top: 1px solid #e9e9e9;
  &:nth-last-child(1){
    border-bottom: 1px solid #e9e9e9;
  }
`;
export const DescWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 50px;
`;
export const RecipeName = styled.h2`
  color: #707070;
  font-weight: 500;
  font-size: 30px;
  padding: 15px 0px 0px 30px;
  position: relative;
    top: -20px;
`;
export const RecipeImageWrapper = styled.div`
  width: 100%;
  height: 320px;
  position: relative;
  overflow: hidden;
  padding-bottom: 30px;
`;
export const RecipeImage = styled.img`
  position: absolute;
  max-width: 100%;
  width: 100%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RecipeDetails = styled.div`
  padding: 20px 10px;
  height: 50px;
  display: flex;
  align-items: center;
`;
export const RecipeDescription = styled.p`
  color: #808080;
  padding: 15px 0px;
`;
export const PrintButton = styled.button`
  background-color: #8dc63f;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 0;
  width: 95px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #808080;
  }
`;
export const RecipeIngredient = styled(RecipeDescription)`
  font-size: 24px;
`;
export const DetailWrapper = styled.div`
  width: 75%;
  padding: 0px 20px;
  box-sizing: border-box;
`;
export const Ratings = styled.div`
  padding: 15px 0px 0px 30px;
  position: relative;
    top: -20px;
`;
export const Reviews = styled.p`
  color: grey;
  display: inline;
  padding: 0px 15px;
`;
export const Ingredients = styled.div`
  border: 1px solid #e9e9e9;
  position: relative;
  padding: 40px 0px;
  :before {
    
      content: "";
    height: 100%;
    width: 1px;
    background-color: #ffd4d4;
    position: absolute;
    top: 0;
    left:70px;
  }
  :after {
    content: "";
    height: 100%;
    width: 1px;
    background-color: #ffd4d4;
    position: absolute;
    top: 0;
    left:74px;
  }
`;
