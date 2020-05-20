import React from "react";
import { withTheme } from "styled-components";

import Author from "../../assets/images/author-photo.jpg";
import {
  AuthorWrapper,
  AuthorDetail,
  AuthorImage,
  AuthorName,
  AuthorEmail,
  AuthorHeading,
} from "./style";
const author = () => {
  return (
    <AuthorWrapper>
      <AuthorHeading>AUTHOR</AuthorHeading>
      <AuthorImage src={Author} alt="author" />
      <AuthorName>Sandra Fortin</AuthorName>
      <AuthorEmail>sandra@chow.com</AuthorEmail>
      <AuthorDetail>
        I'm Sandra and this is where I share my stuff. I am madly in love with
        food. You will find a balance of healthy recipes, comfort food and
        indulgent desserts.
      </AuthorDetail>
    </AuthorWrapper>
  );
};

export default withTheme(author);
