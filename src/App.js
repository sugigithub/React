import React from 'react';
import Header from './Containers/Header/Header';
import styled from 'styled-components';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import DetailScreen from './DetailScreen';
import SearchBar from './SearchRecipe';

const Wrapper = styled.div`
  min-width:auto;
  max-width:100%;
`;
function App() {
  return (
    <Wrapper >
      <Header />
      <SearchBar />
      <DetailScreen />
    </Wrapper>
  );
}

export default App;
