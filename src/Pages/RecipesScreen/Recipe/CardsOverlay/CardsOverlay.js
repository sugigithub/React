import React from "react";

import { BannerOverlay, OverlayButton, Wrapper } from "./style";

const CardsOverlay = (props) => {
  return (
    <Wrapper>
      <BannerOverlay />
      <OverlayButton onClick={props.viewDetails}>View Recipe</OverlayButton>
    </Wrapper>
  );
};

export default CardsOverlay;