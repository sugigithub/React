import React from "react";
import {CheckBoxWrapper,Checkbox,Label} from './style';

const checkbox = (props) => (
      <CheckBoxWrapper>
        <Checkbox type="checkbox" id={props.index} />
        <Label htmlFor={props.index}>{props.ing}</Label>
      </CheckBoxWrapper>
)

export default checkbox;
