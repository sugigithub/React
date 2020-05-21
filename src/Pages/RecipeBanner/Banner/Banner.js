import React, { Fragment } from "react";

import Icon from "../../../CommonComponents/Icons/Icons";
import {
  BannerWrapper,
  BannerOverlay,
  OverlayContet,
  RecipieBtn,
  Text,
  IconsWrapper,
  ViewRecipieBtn,
} from "./style";

const banner = (props) => (
  <Fragment>
    <BannerWrapper url = {require(`./${process.env.PUBLIC_URL}/../../../assets/images/${props.item.bannerImgUrl}.jpg`)}>
      <BannerOverlay />
    <OverlayContet>
      <RecipieBtn>{props.item.title}</RecipieBtn>
      <Text>{props.item.name}</Text>
      <IconsWrapper>
        <Icon values={props.item.details} color="white" />
      </IconsWrapper>
      <ViewRecipieBtn onClick = {props.viewRecipeHandler}>VIEW RECIPIE</ViewRecipieBtn>
    </OverlayContet>
    </BannerWrapper>
  </Fragment>
);

export default banner;
