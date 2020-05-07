import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeSwitcher from "../CommonComponents/ThemeSwitcher/ThemeSwitcher";

const theme = {
  primaryColor: "#8DC63F",
  secondaryColor:"#85BA3B"
};
const Theme = ({ children }) => {
  const [color, setcolor] = useState(theme);

  const changeTheme = (color) => {
    const themes = { ...theme, primaryColor: color.color,secondaryColor:color.dark };
    setcolor(themes);
  };

  const restoreToDefault = () => {
    const themes = { ...theme};
    setcolor(themes);
  };
  return (
    <ThemeProvider theme={color}>
      {children}
      <ThemeSwitcher
        onClick={changeTheme}
        resetColor={restoreToDefault}
      ></ThemeSwitcher>
    </ThemeProvider>
  );
};

export default Theme;
