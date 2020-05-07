import React from "react";
import {Wrapper,Heading,Image,ErrorMsg,HomeButton,BtnArrow} from './style';
import NotFound from '../../assets/images/pagenf.jpg';


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
