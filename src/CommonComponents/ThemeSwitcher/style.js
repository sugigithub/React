import styled from "styled-components";

export const StyleWrapper = styled.div`
  position: fixed;
  top: 60px;
  z-index: 1;
  transition: left 0.5s ease-out;
  left: ${(props) => props.show};
`;

export const Settings = styled.i`
  color: white;
  font-size: 26px;
  padding: 7px 10px;
  cursor: pointer;
`;
export const StyleSwitcher = styled.div`
  background: #505050;
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
export const Switcher = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  padding: 10px 20px;
  width: 100%;
`;
export const ColorsWrapper = styled.div`
  background-color: #606060;
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 15px;
  box-sizing: border-box;
`;
export const Color = styled.div`
  height: 17px;
  width: 17px;
  background-color: ${(props) => props.color};
  margin: 5px;
  cursor: pointer;
`;

export const ResetColor = styled.button`
  border: none;
  outline: none;
  height: 30px;
  width: 100px;
  margin: 10px 0px 10px 30px;
  color: white;
  background-color: ${(props) => props.theme.primaryColor};
  font-weight: 600;
  cursor: pointer;
`;
