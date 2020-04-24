import React, { Fragment } from "react";

import styled from "styled-components";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import Routes from "./Routes/Routes";
const Wrapper = styled.div`
  min-width: auto;
  max-width: 100%;
`;
function App() {
  return (
    <Fragment>
      <Wrapper>
          <Routes />
      </Wrapper>
    </Fragment>
  );
}

export default App;
