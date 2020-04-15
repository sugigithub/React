import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 80px;
  box-sizing: border-box;
`;

const Input = styled.input`
  font-size: 13px;
  width: 220px;
  padding: 12px 15px;
`;
const searchRecipe = () => (
  <Wrapper>
    <form>
      <Input
        className="search-field"
        type="text"
        placeholder="Search for recipes"
        value=""
      />
    </form>
  </Wrapper>
);

export default searchRecipe;
