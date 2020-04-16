import React from "react";

import { RecipieBarWrapper, Recipie, RecipieText } from "./style";
import styled from "styled-components";

// const RecipieBarWrapper = styled.div`
//   width: 950px;
//   height: 80px;
//   margin: 0 auto;
//   display: ${(props) => (props.show ? "flex" : "none")};
// `;
// const Recipie = styled.div`
//   border-left: 1px solid #e3e3e3;
//   width: 25%;
//   height: 100%;
//   background-color: ${(props) => (props.active ? "#8DC63F" : "#F2F2F2")};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   &:hover {
//     background-color: #8dc63f;
//   }
// `;
// const RecipieText = styled.p`
//   text-align: center;
//   padding: 0 25px;
//   color: ${(props) => (props.active ? "white" : "grey")};
//   font-weight: bold;
//   ${Recipie}:hover & {
//     color: white;
//   }
// `;
const recipieBar = (props) => {
  const recipie = props.recipeItem.map((item) => {
    return (
      <Recipie
        key={item.id}
        active={props.active === item.id ? true : false}
        onClick={() => props.clicked(item.id)}
      >
        <RecipieText active={props.active === item.id ? true : false}>
          {item.name}
        </RecipieText>
      </Recipie>
    );
  });
  return <RecipieBarWrapper show={props.show}>{recipie}</RecipieBarWrapper>;
};

export default recipieBar;
