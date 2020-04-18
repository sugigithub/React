import styled from "styled-components";

export const BannerWrapper = styled.div`
  height: 420px;
  position: relative;
  overflow: hidden;
`;

export const BannerImg = styled.img`
  position: absolute;
  max-width: 100%;
  width: 100%;
  height: 100%;
`;
export const BannerOverlay = styled.div`
  height: 100%;
  background: #333;
  width: 100%;
  position: absolute;
  display: block;
  opacity: 0.5;
  top: 0;
`;

export const Text = styled.h2`
  color: #fff;
  font-size: 50px;
  padding: 20px 0px;
  width: 60%;
`;
export const ViewRecipieBtn = styled.button`
  border: 3px solid #fff;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 0;
  width: 130px;
  text-align: center;
  outline: none;
  cursor:pointer;
`;
export const OverlayContet = styled.div`
  position: absolute;
  top: 80px;
  padding: 60px 50px;
  height: 100px;
  display: block;
`;
export const IconsWrapper = styled.div`
  padding: 20px 0px;
`;

export const RecipieBtn = styled.button`
  display: inline-block;
  background-color: #8dc63f;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 0;
  width: 70px;
  border: none;
  text-align: center;
  outline: none;
`;
export const IconText = styled.span`
  font-size: 13px;
  color: white;
  font-weight: bold;
  padding: 0px 25px 0px 10px;
`;
