import React, { Fragment } from "react";

import {BannerOverlay,OverlayButton} from './style';

const cardsOverlay = (props) => {
  return (
    <Fragment>
      <BannerOverlay />
       <OverlayButton onClick = {props.viewDetails}>View Recipe</OverlayButton>
    </Fragment>
  );
};

export default cardsOverlay;