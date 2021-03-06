import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: 100px;
`;

export const HeadingText = styled.p`
  font-size: 24px;
  font-weight: 500;
  width: 950px;
  height: 100%;
  color: #606060;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
export const SubmitRecipeBtn = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 0;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #808080;
  }
  width: 150px;
  border-radius: 3px;
  margin: 0px 20px 20px 0px;
`;
export const FormWrapper = styled.form`
  width: 950px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: 20px 0px;
`;
export const BtnWrapper = styled.div`
  width: fit-content;
  margin: auto;
`;
export const ErrorMsg = styled.p`
  height: 50px;
  font-size: 20px;
  color: red;
  font-weight: 500;
`;
