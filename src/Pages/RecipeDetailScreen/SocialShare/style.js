import styled from "styled-components";

export const ShareButton = styled.button`
  height: 35px;
  outline: none;
  border: none;
  color: white;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  font-weight: 700;
  font-family: inherit;
  padding: 2px 10px;
  margin: 35px 5px;
`;
export const Icon = styled.i`
  padding-right: 5px;
  font-family: inherit;
`;