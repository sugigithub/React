import React from "react";

import styled from "styled-components";
import NotFound from '../../assets/images/pagenf.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`;
const Heading = styled.p`
  font-size: 55px;
  color: #8dc63f;
  font-weight: 700;
  text-align: center;
`;
const ErrorMsg = styled.p`
  color: grey;
  font-size: 28px;
  text-align: center;
  padding: 10px 0px;
`;
const ImgWrapper = styled.div`
  height: 300px;
  width: 100%;
`;
const Image = styled.img`
padding:20px 0px;
`;
const HomeButton = styled.button`
  width: 200px;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 15px;
  position: relative;
  text-align: left;
  padding-left: 35px;
  cursor: pointer;
  background-color: #8dc63f;
  color: white;
  font-size: 15px;
  font-weight: 600;
  margin-top:20px;
`;
export const BtnArrow = styled.i`
  font-size: 20px;
  position: absolute;
  transition: 0.5s;
  top: 14px;
  padding-left: 17px;
  color: white;
`;
const pageNotFound = (props) => {
  return (
    <Wrapper>
      <Heading>404 Page Not Found</Heading>
      <Image src = {NotFound} />
      <ErrorMsg> Looks like you were lost..</ErrorMsg>
      <ErrorMsg> View some recipe by going back home</ErrorMsg>
      <HomeButton onClick = {()=>{props.history.push("/home")}}>
        Go Back Home
        <BtnArrow className="fas fa-long-arrow-alt-right"></BtnArrow>
      </HomeButton>
    </Wrapper>
  );
};

export default pageNotFound;
