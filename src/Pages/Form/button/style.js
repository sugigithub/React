import styled from 'styled-components';

export const Login = styled.button`
  width: 150px;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 20px;
  background-color: ${props => props.theme.primaryColor};
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
  cursor:pointer;
`;
export const SignUpBtn = styled(Login)`
  background-color: transparent;
  color: #999;
  transition: 0.5s;
  position: relative;
  text-align: left;
  padding-left: 35px;
  float: right;
  :hover {
    background-color: ${props => props.theme.primaryColor};
    color: white;
  }
`;
export const BtnArrow = styled.i`
  font-size: 20px;
  padding-left: 0px;
  color: transparent;
  position: absolute;
  transition: 0.5s;
  top: 14px;
  ${SignUpBtn}:hover & {
    padding-left: 17px;
    transition: all 0.5s ease;
    color: white;
  }
`;