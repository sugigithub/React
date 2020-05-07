import styled from "styled-components";
export const Line = styled.div`
  width: 0%;
  height: 2px;
  background-color: ${props => props.theme.primaryColor};
  transition: width 0.5s ease-in-out;
  position: absolute;
  bottom: -14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border: none;
  transition: width 0.5s ease-in-out;
  border-bottom: 2px solid #dbdbdb;
  outline: none;
  font-size: 20px;
  color: ${props => props.theme.primaryColor};
  ::placeholder {
    font-size: 16px;
    color: #cccccc;
    line-height: 1.2;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
    :focus + div {
      transition: width 0.5s ease-in-out;
      width: 100%;
    }
    border-bottom: none;
  }
`;
export const FieldWrapper = styled.div`
  margin-bottom: 20px;
  ${Input}:focus & {
    border-bottom: 2px solid grey;
  }
`;
export const Label = styled.label`
  font-size: 18px;
  color: #999;
  line-height: 1.2;
  padding-left: 2px;
  font-weight: 700;
  position: relative;
`;

export const ShowHide = styled.p`
  position: absolute;
  top: 35px;
  left: 85%;
  color:${props => props.theme.primaryColor};
  cursor:pointer;
`;
