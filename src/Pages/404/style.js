import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`;
export const Heading = styled.p`
  font-size: 55px;
  color: ${props => props.theme.primaryColor};
  font-weight: 700;
  text-align: center;
  padding-top:40px;
`;
export const ErrorMsg = styled.p`
  color: grey;
  font-size: 28px;
  text-align: center;
  padding: 10px 0px;
`;
export const Image = styled.img`
padding:20px 0px;
`;
export const HomeButton = styled.button`
  width: 200px;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 15px;
  position: relative;
  text-align: left;
  padding-left: 35px;
  cursor: pointer;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  font-size: 15px;
  font-weight: 600;
  margin-top:20px;
`;
export const BtnArrow = styled.i`
  font-size: 20px;
  position: absolute;
  transition: 0.5s;
  top: 14px;
  padding-left: 17px;
  color: white;
`;