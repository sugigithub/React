import React, { Fragment, useState } from "react";

import {
  FieldWrapper,
  Label,
  Input,
  Line,
  ShowHide,
  TextArea,
  Dropdown,
  ListItem,
  DropArrow,
  IconWrapper,
  PreviewImg,
  FileInput,
  PreviewBar,
  PreviewText,
  IngInput,
  IngIcon,
  IngIconWrapper,
  NewIng,
} from "./style";

const Inputs = (props) => {
  const [show ,setShow] = useState(false);
  let inputElement = null;
  switch (props.formConfig.elementType) {
    case "input":
      inputElement = (
        <Input
          id={props.id}
          {...props.formConfig.elementConfig}
          value={props.formConfig.value}
          onChange={props.saveValues}
          options={props.options}
          submit={props.submit}
        ></Input>
      );
      break;
    case "textarea":
      inputElement = (
        <TextArea
          {...props.formConfig.elementConfig}
          value={props.formConfig.value}
          onChange={props.saveValues}
        />
      );
      break;
    case "select":
      const dropDownOption = (
        <Dropdown show = {show}>
          {props.options.map((val, i) => {
            return (
              <ListItem
              onClick={()=>setShow(false)}
                key={i}
                onClick={(event) => props.setDropdown(event, val)}
              >
                {val}
              </ListItem>
            );
          })}
        </Dropdown>
      );
      inputElement = (
        <Fragment>
          <div onClick={()=>{setShow(true);
            console.log(show)}}>
            <Input
              id={props.id}
              {...props.formConfig.elementConfig}
              value={props.formConfig.value}
              onChange={props.filterAndSaveValues}
              onFocus={props.onFocus}
              onBlur={props.onBlur}
              options={props.options}
              submit={props.submit}
            ></Input>
          </div>
          {dropDownOption}
          {/* <Dropdown >
          <ListItem key={"i"} onClick = {() => props.setDropdown("val")}>
                  {"val"}
                </ListItem>
                <ListItem key={"i1"} onClick = {() => props.setDropdown("val1")}>
                  {"val"}
                </ListItem>
                </Dropdown> */}
        </Fragment>
      );
      break;
    case "file":
      inputElement = (
        <Fragment>
          <PreviewBar>
            {props.formConfig.value ? (
              <PreviewImg src={props.formConfig.value}></PreviewImg>
            ) : (
              <PreviewText>No photos added yet</PreviewText>
            )}
          </PreviewBar>
          <FileInput
            {...props.formConfig.elementConfig}
            // value={props.formConfig.value}
            onChange={props.uploadImage}
          ></FileInput>
        </Fragment>
      );
      break;
    case "addMultiple":
      const ing = props.formConfig.value.map((ele, index) => {
        return (
          <PreviewBar key={index}>
            <IngIconWrapper>
              <IngIcon className="fa fa-cog" aria-hidden="true"></IngIcon>
            </IngIconWrapper>
            <IngInput
              placeholder={props.formConfig.elementConfig.placeholder[0]}
              value={props.formConfig.value[index].value1}
              onChange={(event) => props.setIngs(event, "quantity", index)}
            />
            <IngInput
              placeholder={props.formConfig.elementConfig.placeholder[1]}
              value={props.formConfig.value[index].value2}
              onChange={(event) => props.setIngs(event, "name", index)}
            />
            <IngIconWrapper delete onClick={() => props.deleteIngs(index)}>
              <IngIcon className="fa fa-times" aria-hidden="true"></IngIcon>
            </IngIconWrapper>
          </PreviewBar>
        );
      });
      inputElement = (
        <Fragment>
          {ing}
          <NewIng onClick={props.addIngHandler}>Add new ingredient</NewIng>
        </Fragment>
      );
      break;
    default:
      inputElement = (
        <Input
          id={props.id}
          {...props.formConfig.elementConfig}
          value={props.formConfig.value}
          onChange={props.saveValues}
        ></Input>
      );
  }
  return (
    <FieldWrapper>
      <Label htmlFor={props.id}>
        {props.formConfig.label}
        {inputElement}
        <Line></Line>
        {props.formConfig.showHide ? (
          <ShowHide onClick={props.toogleShow}>
            {props.formConfig.showHide}
          </ShowHide>
        ) : props.formConfig.arrow == "up" ? (
          <IconWrapper key="icon-check">
            <DropArrow className="fas fa-caret-up"></DropArrow>
          </IconWrapper>
        ) : props.formConfig.arrow == "down" ? (
          <IconWrapper key="icon-down">
            <DropArrow className="fas fa-caret-down"></DropArrow>
          </IconWrapper>
        ) : null}
      </Label>
    </FieldWrapper>
  );
};

export default Inputs;
