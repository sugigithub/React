import styled from "styled-components";

export const RecipieBarWrapper = styled.div`
  width: 950px;
  height: 80px;
  margin: 0 auto;
  display: ${(props) => (props.show ? "flex" : "none")};
`;
export const Recipie = styled.div`
  border-left: 1px solid #e3e3e3;
  width: 25%;
  height: 100%;
  background-color: ${(props) => (props.active ? "#8DC63F" : "#F2F2F2")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background-color: #8dc63f;
  }
`;
export const RecipieText = styled.p`
  text-align: center;
  padding: 0 25px;
  color: ${(props) => (props.active ? "white" : "grey")};
  font-weight: bold;
  ${Recipie}:hover & {
    color: white;
  }
`;
