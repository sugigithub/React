import styled,{keyframes} from 'styled-components';

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
  ::after{
    width: 10em;
  height: 10em;
  }
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top:${props => `1.1em solid ${props.theme.primaryColor}`} ;
  border-right: ${props => `1.1em solid ${props.theme.primaryColor}`} ;
  border-bottom: ${props => `1.1em solid ${props.theme.primaryColor}`} ;
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${spin} 1.1s infinite linear;
  animation: ${spin} 1.1s infinite linear;
`;