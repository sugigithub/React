import styled from "styled-components";

export const Wrapper = styled.form`
  height: 80px;
  box-sizing: border-box;
  display: flex;
  padding: 15px 1px;
`;

export const Input = styled.input`
  font-size: 15px;
  width: 75%;
  padding: 12px 15px;
  outline: none;
  border: 3px solid #8dc63f;
  border-right: none;
  border-radius: 10px 0px 0px 10px;
  color: grey;
  font-weight: 500;
`;
export const RecipieBtn = styled.button`
  display: inline-block;
  background-color: transparent;
  color: white;
  font-size: 14px;
  padding: 10px 0;
  width: 25%;
  border: none;
  outline: none;
  border: 3px solid #8dc63f;
  border-left: none;
  border-radius: 0px 10px 10px 0px;
`;
