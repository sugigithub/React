import React from "react";

import styled from "styled-components";

import RecipeBanner from "./Pages/RecipeBanner/RecipeBanner";
import RecipesScren from "./Pages/RecipesScreen/Recipies";
import Navigation from "./CommonComponents/NavigationItems/NavigationItems";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
// import SearchBar from "./CommonComponents/SearchRecipe/SearchRecipe";
// import Author from "./CommonComponents/Author/Author";

const Wrapper = styled.div`
  min-width: auto;
  max-width: 100%;
`;

const Wrapper1 = styled.div`
`;
function App() {
  return (
    <Wrapper>
      <Navigation />
      <RecipesScren />
        {/* <SearchBar />
        <Author /> */}
    </Wrapper>
  );
}

export default App;
