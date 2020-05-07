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
  border: ${(props) => `3px solid ${props.theme.primaryColor}`};
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
  border: ${(props) => `3px solid ${props.theme.primaryColor}`};
  border-left: none;
  border-radius: 0px 10px 10px 0px;
  color: ${(props) => props.theme.primaryColor};
`;
export const SearchIcon = styled.i`
  color: inherit;
`; 
