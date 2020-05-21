import React from "react";
import { Loader ,Tick} from "./style";

/**
 * Loader to show when data loading
 * import and use as <Spinner {...} />
 */

const Spinner = (props) => {
  return <Loader spin = {props.spin}>
    <Tick spin = {props.spin}/>
  </Loader>;
};

export default Spinner;
