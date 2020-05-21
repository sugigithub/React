import React from "react";
import Loader from "../../../CommonComponents/Spinner/Spinner";
import { withTheme } from "styled-components";
import styled from "styled-components";

export const PurchaseMsg = styled.p`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.primaryColor};
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction:column;
`;
export const ProductsBtn = styled.button`
  width: 150px;
  height: 35px;
  border: none;
  outline: none;
  font-size: 14px;
  color: white;
  background-color: ${(props) => props.theme.primaryColor};
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;
`;
const PurchaseSuccess = (props) => {
  return (
    <Wrapper>
      <PurchaseMsg>Your purchase was successful</PurchaseMsg>
      <Loader spin />
      <ProductsBtn onClick = {props.click}>See more products</ProductsBtn>
    </Wrapper>
  );
};

export default withTheme(PurchaseSuccess);
