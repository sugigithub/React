import React from "react";

import styled from "styled-components";
import Navigation from "./CommonComponents/NavigationItems/NavigationItems";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import Routes from './Routes';


const Wrapper = styled.div`
  min-width: auto;
  max-width: 100%;
`;
function App() {
  return (
    <Wrapper>
      <Navigation />
      <Routes />
    </Wrapper>
  );
}

export default App;
