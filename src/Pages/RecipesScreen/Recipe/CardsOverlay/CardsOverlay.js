import React, { Fragment } from "react";

import styled from "styled-components";

const OverlayButton = styled.button`
  position: absolute;
  height: 50px;
  width: 120px;
  background-color: rgba(51, 51, 51, 0.8);
  color: white;
  border: none;
  top: 37%;
  left: 24%;
`;

const BannerOverlay = styled.div`
  height: 100%;
  background: #333;
  width: 100%;
  position: absolute;
  display: block;
  opacity: 0.4;
  top: 0;
`;

const cardsOverlay = (props) => {
  return (
    <Fragment>
      <BannerOverlay>
    </BannerOverlay>
      <OverlayButton onClick = {props.viewDetails}>View Recipe</OverlayButton>
    </Fragment>
  );
};

export default cardsOverlay;
