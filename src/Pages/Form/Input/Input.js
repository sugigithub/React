import React from "react";

import { FieldWrapper, Label, Input, Line, ShowHide } from "./style";

const input = (props) => {
  return (
    <FieldWrapper>
      <Label htmlFor={props.id}>
        {props.formConfig.label}
        <Input
          id={props.id}
          {...props.formConfig.elementConfig}
          value={props.formConfig.value}
          onChange={props.saveValues}
        ></Input>
        <Line></Line>
        {props.formConfig.showHide ? (
          <ShowHide onClick = {props.toogleShow}>{props.formConfig.showHide}</ShowHide>
        ) : null}
      </Label>
    </FieldWrapper>
  );
};

export default input;
