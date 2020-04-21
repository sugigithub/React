import styled from "styled-components";

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0px 35px 0px;
`;

export const Recipe = styled.h2`
  color: #606060;
  font-weight: 500;
  padding-right: 50px;
  font-size:25px;
`;
export const ListorGridBox = styled.button`
  width: 150px;
  height: 35px;
  border: none;
  outline: none;
  font-size: 14px;
  transition: 0.2s ease-out;
  color: ${(props) => (props.listView ? "white" : "gray")};
  background-color: ${(props) => (props.listView ? "#8DC63F" : "#F2F2F2")};
  font-weight: 600;
  border-radius: 3px;
  cursor:pointer;
`;