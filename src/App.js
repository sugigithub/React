import React from "react";

import styled from "styled-components";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import Routes from "./Routes/Routes";
import Themes from "./Themes/Theme";
const Wrapper = styled.div`
  min-width: auto;
  max-width: 100%;
  height: 100vh;
`;
const Wrapper1 = styled.div`
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #F1F1F1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 10px;
  }
`;
function App() {
  return (
    <Themes>
        <Wrapper>
          <Wrapper1 id = "wrapper">
            <Routes />
          </Wrapper1>
        </Wrapper>
    </Themes>
  );
}

export default App;
