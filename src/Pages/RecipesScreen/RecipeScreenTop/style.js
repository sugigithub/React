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
export const GridListBtn = styled.div`
  height: 40px;
  width: 130px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  cursor:pointer;
  ::after {
    content: "";
    position: absolute;
    height: 90%;
    width: 70px;
    background-color: #f2f2f2;
    top: 2px;
    border-radius: 20px;
    transition: left 0.2s ease-out;
    left: ${props => props.listView ? "58px":"2px"};
  }
`;

export const Grid = styled.p`
  padding-left: 20px;
  margin: 0;
  z-index: 1;
  color: ${props => props.listView ? "white":"grey"};
  font-weight: bold;
  font-size: 15px;
  line-height: 40px;
`;
export const List = styled(Grid)`
  padding-left: 0px;
  padding-right: 23px;
  color:${props => props.listView ? "grey":"white"}
`;
