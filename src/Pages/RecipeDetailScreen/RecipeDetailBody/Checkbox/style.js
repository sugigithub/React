import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  display: flex;
`;
export const Checkbox = styled.input`
  padding: 0;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
  &:checked + label {
    &{
      text-decoration: line-through;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 5px;
      left: 8px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
      border-radius: 4px;
    }
    &:before {
      background-color: #8dc63f;
      border-color: #8dc63f;
    }
  }
`;
export const Label = styled.label`
  color: #808080;
  padding: 15px 0px;
  position: relative;
  cursor: pointer;
  padding: 4px 50px;
  &:before {
    content: "";
    display: inline-block;
    width: 23px;
    height: 23px;
    position: absolute;
    left: 0;
    top: -1px;
    background-color: #fff;
    border: 2px solid #d0d0d0;
    box-sizing: border-box;
    margin: 2px 0px;
  }
`;
