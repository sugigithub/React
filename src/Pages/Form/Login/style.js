import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100vh; 
  align-items: center;
`;
export const Image = styled.div`
  background-image: url(${(props) => props.img});
  width: 60%;
  background-size: cover;
  height: 100vh;
  background-position:center;
`;
export const FormElementsWrapper = styled.form`
  width: 40%;
  padding: 20px;
  box-sizing: border-box;
`;