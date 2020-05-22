import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  display: ${(props) => (props.show ? "block" : "none")};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  cursor: pointer;
`;
export const ErrorMsg = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 150px;
  width: 300px;
  border: 2px solid black;
  left: calc(50% - 150px);
  background-color: rgba(0, 0, 0, 0.7);
`;
export const Text = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 150px;
`;