import styled from "styled-components";

export const AuthorWrapper = styled.div`
  width: 100%;
  border: 1px solid #e8e8e8;
  padding: 20px 20px;
  box-sizing: border-box;
  height: fit-content;
`;
export const AuthorDetail = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  /* width: 100px; */
  padding-top: 15px;
  line-height: normal;
`;
export const AuthorImage = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  float:right;
`;