import React, { Fragment } from "react";

import Icon from "../../Icons/Icons";
import {
  BannerWrapper,
  BannerImg,
  BannerOverlay,
  OverlayContet,
  RecipieBtn,
  Text,
  IconsWrapper,
  IconText,
  ViewRecipieBtn,
} from "./style";

const banner = (props) => (
  <Fragment>
    <BannerWrapper>
      <BannerImg src={props.item.imgUrl} alt="banner image"></BannerImg>
    <BannerOverlay />

    </BannerWrapper>
    
    <OverlayContet>
      <RecipieBtn>{props.item.title}</RecipieBtn>
      <Text>{props.item.recipe}</Text>
      <IconsWrapper>
        <Icon values={props.item.details} color="white" />
        <IconText>{props.item.author}</IconText>
      </IconsWrapper>
      <ViewRecipieBtn>VIEW RECIPIE</ViewRecipieBtn>
    </OverlayContet>
  </Fragment>
);

export default banner;
