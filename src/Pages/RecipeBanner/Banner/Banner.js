import React, { Fragment } from "react";

import Icon from "../../../CommonComponents/Icons/Icons";
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
      <BannerImg src={props.item.bannerImgUrl} alt="banner image"></BannerImg>
      <BannerOverlay />
    </BannerWrapper>
    <OverlayContet>
      <RecipieBtn>{props.item.title}</RecipieBtn>
      <Text>{props.item.name}</Text>
      <IconsWrapper>
        <Icon values={props.item.details} color="white" />
        <IconText>{props.item.author}</IconText>
      </IconsWrapper>
      <ViewRecipieBtn onClick = {props.viewRecipeHandler}>VIEW RECIPIE</ViewRecipieBtn>
    </OverlayContet>
  </Fragment>
);

export default banner;
