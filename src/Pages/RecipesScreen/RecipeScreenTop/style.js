import styled from "styled-components";

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0px 35px 0px;
  position: relative;
  height: 100px;
  box-sizing: border-box;
`;

export const Recipe = styled.h2`
  color: #606060;
  font-weight: 500;
  padding-right: 50px;
  font-size: 25px;
`;
export const Grid = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  outline: none;
  font-size: 14px;
  /* transition: 0.2s ease-in-out; */
  color: ${(props) => (props.listView ? "gray" : "white")};
  background-color: ${(props) => (props.listView ? "#F2F2F2" : props.theme.primaryColor)};
  font-weight: 600;
  border-radius: 23px;
  cursor: pointer;
  position: ${(props) => (props.listView ? "unset" : "absolute")};
  left: 215px;
  border: ${(props) => (props.listView ? `2px solid ${props.theme.primaryColor}` : "none")};
`;

export const List = styled(Grid)`
  position: absolute;
  left: 278px;
  border:${props => `2px solid ${props.theme.primaryColor}`};
  padding-left: ${(props) => (props.listView ? "23px" : "0px")};
`;
