import React, { Fragment } from "react";

import styled from "styled-components";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import Routes from "./Routes/Routes";
import Themes from "./Themes/Theme";
const Wrapper = styled.div`
  min-width: auto;
  max-width: 100%;
`;
function App() {
  return (
    <Themes>
      <Fragment>
        <Wrapper>
          <Routes />
        </Wrapper>
      </Fragment>
    </Themes>
  );
}

export default App;
