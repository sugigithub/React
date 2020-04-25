import styled from "styled-components";

export const FormElementsWrapper = styled.form`
  width: 40%;
  padding: 20px;
  box-sizing: border-box;
`;
export const SignupText = styled.p`
  font-size: 39px;
  color: #333;
  line-height: 1.2;
  padding: 20px 0px 10px 0px;
  font-weight: 500;
`;
export const ErrorOutput = styled.p`
  color: red;
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 10px;
  height:45px;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const Image = styled.div`
  background-image: url(${(props) => props.img});
  width: 60%;
  background-size: cover;
`;