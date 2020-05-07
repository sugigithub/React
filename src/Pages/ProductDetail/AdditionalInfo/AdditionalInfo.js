import React, { useState, useEffect } from "react";

import { withTheme } from "styled-components";

import { ActionButtons } from "../style";
import {
  AdditionalInfoWrapper,
  Buttonwrapper,
  ProdDes,
  AddInfo,
  ReviewWrapper,
} from "./style";

const AdditionalInfo = (props) => {
  const [color, setColor] = useState([1, 0, 0]);
  useEffect(() =>{
    console.log("fr")
  })
  const changeState = (id) => {
    console.log(id);
    let oldState = [...color];
    for (let i = 0; i < oldState.length; i++) {
      if (i === id) oldState[i] = 1;
      else oldState[i] = 0;
    }
    setColor(oldState);
    console.log([color])
  };
  return (
    <AdditionalInfoWrapper>
      <Buttonwrapper>
        <ActionButtons
          colour={color[0] === 1 ? props.theme.primaryColor : "#C0C0C0"}
          onClick={() => changeState(0)}
        >
          Item Description
        </ActionButtons>
        <ActionButtons
          colour={color[1] === 1 ? props.theme.primaryColor : "#C0C0C0"}
          onClick={() => changeState(1)}
        >
          Additional Information
        </ActionButtons>
        <ActionButtons
          colour={color[2] === 1 ? props.theme.primaryColor : "#C0C0C0"}
          onClick={() => changeState(2)}
        >
          Reviews(0)
        </ActionButtons>
      </Buttonwrapper>
      <ProdDes show={color[0] === 1}>
        Maecenas consequat mauris nec semper tristique. Etiam fermentum augue ac
        vulputate pulvinar. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Pellentesque arcu.
      </ProdDes>
      <AddInfo show={color[1] === 1}>weight</AddInfo>
      <AddInfo show={color[1] === 1}>40LBS</AddInfo>
      <ReviewWrapper show={color[2] === 1}>
        <ProdDes show={color[2] === 1}>There are no reviews yet.</ProdDes>
        <ActionButtons colour={props.theme.primaryColor} hoverColor="gray">
          ADD REVIEW
        </ActionButtons>
      </ReviewWrapper>
    </AdditionalInfoWrapper>
  );
};

export default withTheme(AdditionalInfo);
