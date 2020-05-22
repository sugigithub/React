import React from "react";

import { Overlay, ErrorMsg, Text } from "./style";

const ErrorOverlay = (props) => {
  return (
    <Overlay show={props.error}>
      <ErrorMsg>
        <Text>Your session will going to expire</Text>
        <Text onClick={props.closeOverlay}>click here to keep you logged in</Text>

      </ErrorMsg>
    </Overlay>
  );
};

export default ErrorOverlay;