import React from "react";

import Author from "../../assets/images/author-photo.jpg";
import {AuthorWrapper,AuthorDetail,AuthorImage} from './style';
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
