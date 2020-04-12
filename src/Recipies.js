import React from "react";
import styled from "styled-components";
import Recipe1 from "./assets/images/recipeThumb-01.jpg";
import Recipe2 from "./assets/images/recipeThumb-02.jpg";
import Recipe3 from "./assets/images/recipeThumb-03.jpg";

const RecipieWrapper = styled.div`
  width: 75%;
  display: flex;
  padding-top: 20px;
`;
const RecipieCard = styled.div`
  width: 32%;
  margin-right: 1.33%;
  background-color: #f2f2f2;
`;

const RecipieName = styled.h2`
  color: grey;
  font-size: 19px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e5e5e5;
`;
const Image = styled.img`
  width: 100%;
  height: 220px;
`;

const RecipieTitleBox = styled.div`
  width: 100%;
  height: 150px;
  padding: 15px;
  box-sizing: border-box;
`;
const Time = styled.p`
  text-align: end;
  padding-left: 10px;
  color: gray;
  font-weight: bold;
  font-size: 14px;
`;
const Duration = styled.div`
  display: flex;
  padding: 7px 0px;
  justify-content: flex-end;
`;
const Rating = styled.div`
  padding-top: 10px;
`;
const recipie = (props) => {
    const color = "green";
  return (
    <RecipieWrapper>
      <RecipieCard>
        <Image src={Recipe3} />
        <RecipieTitleBox>
          <RecipieName>Mexican Grilled Corn Recipe</RecipieName>
          <p>
            Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet
            scelerisque bibendum. Aenean ullamcorper neque ac tristique semper.
            Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.
          </p>
          <Rating>
            <i className="fas fa-star" style={{ color: "#E0E0E0" }}></i>
            <i className="fas fa-star" style={{ color: "#F3C63F" }}></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </Rating>
          <Duration>
            <i
              className="fas fa-clock"
              style={{ color: "gray", fontSize: "14px" }}
            ></i>
            <Time>45 mins</Time>
          </Duration>
        </RecipieTitleBox>
      </RecipieCard>
    </RecipieWrapper>
  );
};

export default recipie;
