import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  ::after {
    width: 10em;
    height: 10em;
  }
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  /* border: 5px solid rgba(0, 0, 0, 0.2); */
  border:${(props) => props.spin?`5px solid ${props.theme.primaryColor}`:"5px solid rgba(0, 0, 0, 0.2)"};
  border-right: ${(props) => `5px solid ${props.theme.primaryColor}`};
  transform: translateZ(0);
  animation: ${props => props.spin? css`${spin} 0s infinite linear`:css`${spin} 1.1s infinite linear`};
`;

export const Tick = styled.div`
  display:${props => props.spin?"block":"none"};
  ::after {
    opacity: 1;
    height: 5em;
    width: 2.3em;
    transform-origin: left top;
    border-right: ${(props) => `5px solid ${props.theme.primaryColor}`};
    border-top: ${(props) => `5px solid ${props.theme.primaryColor}`};
    content: '';
    left: 2.3em;
    top: 5.5em;
    position: absolute;
    transform: scaleX(-1) rotate(135deg);
  }
`;
