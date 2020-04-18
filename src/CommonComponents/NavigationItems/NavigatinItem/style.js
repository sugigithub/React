import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ListWrapper = styled.ul`
  height: 100%;
  list-style-type: none;
  display: flex;
  margin: 0;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const List = styled.li`
  box-sizing: border-box;
  display: block;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const DropDownWrapper = styled.span`
  display: flex;
  height:100%;
  box-sizing:border-box;
  width:100%;
`;
export const StyledLink = styled(NavLink)`
  color: #707070;
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  padding: 0px 5px;
  height: 100%;
  padding-top:35px;
  width:100%;
  &:hover {
    border-bottom: 3px solid #8dc63f;
  }
  &.${props => props.activeClassName} {
    border-bottom: 3px solid #8dc63f;
	}
  
`;
