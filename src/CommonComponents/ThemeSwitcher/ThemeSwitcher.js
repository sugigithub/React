import React, { useState } from "react";

import {
  StyleWrapper,
  StyleSwitcher,
  Switcher,
  Settings,
  ColorsWrapper,
  Color,
  ResetColor,
} from "./style";
const colors = [
  {
    id: 0,
    color: "#8DC63F",
    dark:"#85BA3B"
  },
  {
    id: 1,
    color: "#5AB3EA",
    dark:"#53A8DC",
  },
  {
    id: 2,
    color: "#E8592A",
    dark:"#DA5327",
  },
  {
    id: 3,
    color: "#F1B317",
    dark:"#E3A915",
  },
  {
    id: 4,
    color: "#F0AA54",
    dark:"#E2A04E",
  },
  {
    id: 5,
    color: "#BFA981",
    dark:"#B39F78",
  },
  {
    id: 6,
    color: "#917AE9",
    dark:"#8872DA",
  },
  {
    id: 7,
    color: "#74AEA1",
    dark:"#6DA497",
  },
  {
    id: 8,
    color: "#D64391",
    dark:"#CA3F88",
  },
  {
    id: 9,
    color: "#DD3737",
    dark:"#D13433",
  },
  {
    id: 10,
    color: "#784E3D",
    dark:"#714A3A",
  },
  {
    id: 11,
    color: "#911938",
    dark:"#881734",
  },
  {
    id: 12,
    color: "#5AB7BD",
    dark:"#54ACB2",
  },
  {
    id: 13,
    color: "#808080",
    dark:"#787878",
  },
  {
    id: 14,
    color: "#404040",
    dark:"#303030", 
  },
  {
    id:15,
    color:"#495D7F",
    dark:"#445778"
  }
];

/**
 * change apps theme
 * import and use as <ThemeSwitcher {...} />
 */
const ThemeSwitcher = (props) => {
  const [toggle, setToggle] = useState("-201px");
  const ToggleColorSwitcher = () => {
    if (toggle === "0px") setToggle("-201px");
    else setToggle("0px");
  };

  return (
    <StyleWrapper show={toggle}>
      <StyleSwitcher onClick={ToggleColorSwitcher}>
        <Switcher>Style Switcher</Switcher>
        <Settings className="fas fa-cog"></Settings>
      </StyleSwitcher>
      <ColorsWrapper>
        <Switcher>Predefined colors</Switcher>
        {colors.map((color) => (
          <Color
            key={color.id}
            color={color.color}
            onClick={() => props.onClick(color)}
          ></Color>
        ))}
        <ResetColor onClick={props.resetColor}>RESET</ResetColor>
      </ColorsWrapper>
    </StyleWrapper>
  );
};

export default ThemeSwitcher;
