import styled from "styled-components";

export const ListWrapper = styled.ul`
  background-color: #333;
  z-index: 999;
  display: ${props => props.show ? "block" : "none"};
  /* display: block; */
  top:80px;
  position: absolute;
  height: 110px;
  width: 140px;
`;
export const List = styled.li`
    padding: 10px;
    border-top: 0.1px solid gray;
`;
export const Link = styled.a`
    text-decoration:none;
    color:gray;
`;