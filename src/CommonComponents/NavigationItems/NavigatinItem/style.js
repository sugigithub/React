import styled from "styled-components";

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
  &:hover {
    border-bottom: 7px solid #8dc63f;
    margin-bottom: -7px;
  }
  border-bottom: ${(props) => (props.active === 0 ? "7px solid #8DC63F" : "0")};
  margin-bottom: ${(props) => (props.active === 0 ? "-7px" : "0")};
`;
export const Link = styled.a`
  color: #707070;
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  padding: 0px 5px;
`;

export const DropDownWrapper = styled.span`
  display: flex;
`;