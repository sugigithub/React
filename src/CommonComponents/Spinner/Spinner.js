import React from "react";
import { Loader ,Tick} from "./style";

const Spinner = (props) => {
  return <Loader spin = {props.spin}>
    <Tick spin = {props.spin}/>
  </Loader>;
};

export default Spinner;
