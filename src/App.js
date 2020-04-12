import React from 'react';
import Header from './CommonComponents/Header/Header';
import styled from 'styled-components';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import DetailScreen from './DetailScreen';
import SearchBar from './SearchRecipe';
import Navigation from './CommonComponents/NavigationItems/NavigationItems';

const Wrapper = styled.div`
  min-width:auto;
  max-width:100%;
`;
function App() {
  return (
    <Wrapper >
      <Navigation />
      <Header />
      <SearchBar />
      <DetailScreen />
    </Wrapper>
  );
}

export default App;
