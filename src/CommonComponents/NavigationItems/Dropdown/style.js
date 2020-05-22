import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ListWrapper = styled.ul`
  background-color: #333;
  z-index: 999;
  display: ${(props) => (props.show ? "block" : "none")};
  top: 80px;
  position: absolute;
  height: 110px;
  width: 140px;
  border-top: 3px solid #8dc63f;
  border-color:${props => props.theme.primaryColor};
  margin-top: -3px;
`;
export const List = styled.li`
  padding: 10px;
  border-top: 0.1px solid gray;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: gray;
`;
