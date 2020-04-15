import React from "react";

import Author from "../../assets/images/author-photo.jpg";
import styled from "styled-components";

const AuthorWrapper = styled.div`
  width: 220px;
  border: 1px solid #e8e8e8;
  padding: 20px 20px;
  box-sizing: border-box;
  height: fit-content;
`;
const AuthorDetail = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  /* width: 100px; */
  padding-top: 15px;
  line-height: normal;
`;
const AuthorImage = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  float:right;
`;
const author = (props) => {
  return (
    <AuthorWrapper>
      {/* <AuthorHead></AuthorHead> */}
      <AuthorDetail color="#8dc63f" fontSize="17px" fontWeight="500">
        AUTHOR
      </AuthorDetail>
      <AuthorImage src={Author} />
      <AuthorDetail color="#606060" fontSize="20px" fontWeight="700">
        Sandra Fortin
      </AuthorDetail>
      <AuthorDetail color="#808080" fontSize="15px" fontWeight="400">sandra@chow.com</AuthorDetail>
      <AuthorDetail color="#808080" fontSize="16px" fontWeight="400">
        I'm Sandra and this is where I share my stuff. I am madly in love with
        food. You will find a balance of healthy recipes, comfort food and
        indulgent desserts.
      </AuthorDetail>
      
    </AuthorWrapper>
  );
};

export default author;
