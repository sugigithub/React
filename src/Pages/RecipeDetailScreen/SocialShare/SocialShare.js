import React from "react";
import { ShareButton, Icon } from "./style";

const share = [
  { id: 1, iconName: "fab fa-facebook-f", name: "Facebook", color: "#3B5998" },
  { id: 2, iconName: "fab fa-twitter", name: "Twitter", color: "#5EBCF3" },
  {
    id: 3,
    iconName: "fab fa-google-plus-g",
    name: "Google Plus",
    color: "#DD4B39",
  },
  { id: 4, iconName: "fab fa-pinterest-p", name: "Pintrest", color: "#CC2827" },
];

const socialShare = () => {
  return share.map((icon) => (
    <ShareButton key={icon.id} color={icon.color}>
      <Icon className={icon.iconName}></Icon>
      {icon.name}
    </ShareButton>
  ));
};

export default socialShare;
