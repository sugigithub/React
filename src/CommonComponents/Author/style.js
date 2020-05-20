import styled from "styled-components";

export const AuthorWrapper = styled.div`
  width: 100%;
  border: 1px solid #e8e8e8;
  padding: 20px 20px;
  box-sizing: border-box;
  height: fit-content;
`;
export const AuthorDetail = styled.p`
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  padding-top: 15px;
  line-height: normal;
`;
export const AuthorEmail = styled(AuthorDetail)`
  color: #808080;
  font-size: 15px;
  font-weight: 400;
`;
export const AuthorName = styled(AuthorDetail)`
  color: #606060;
  font-size: 20px;
  font-weight: 700;
`;
export const AuthorImage = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  float: right;
`;
export const AuthorHeading = styled(AuthorDetail)`
  color: ${(props) => props.theme.primaryColor};
  font-size: 17px;
  font-weight: 500;
`;
