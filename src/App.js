import React from 'react';

import styled from 'styled-components';

import RecipeBanner from './CommonComponents/RecipeBanner/RecipeBanner';
import RecipesScren from './Pages/RecipesScreen/Recipies'
import Navigation from './CommonComponents/NavigationItems/NavigationItems';
import '../node_modules/@fortawesome/fontawesome-free/js/all';


const Wrapper = styled.div`
  min-width:auto;
  max-width:100%;
`;
function App() {
  return (
    <Wrapper >
      <Navigation />
      <RecipeBanner />
      <RecipesScren />
    </Wrapper>
  );
}

export default App;
