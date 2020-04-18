import React, { Component } from "react";

import { MainWrapper, ImgWrapper, Logo, Navigation } from "./style";
import AppLogo from "../../assets/images/logo.jpg";
import NavigationItem from "./NavigatinItem/NavigationItem";

class NavigationItems extends Component {
  state = {
    listItems: [
      { id: "0", name: "Home", subLinks: null, mapTo: "/" },
      {
        id: "1",
        name: "Demos",
        subLinks: [
          { id: 0, subLinkName: "Shortcodes" },
          { id: 1, subLinkName: "Typography" },
          { id: 2, subLinkName: "Contact" },
        ],
        mapTo: "'/Demos",
      },
      {
        id: "2",
        name: "Recipies",
        subLinks: [
          { id: 0, subLinkName: "Shortcodes" },
          { id: 1, subLinkName: "Typography" },
          { id: 2, subLinkName: "Contact" },
        ],
        mapTo: "/recipe-detail",
      },
      {
        id: "3",
        name: "page",
        subLinks: [
          { id: 0, subLinkName: "Shortcodes" },
          { id: 1, subLinkName: "Typography" },
          { id: 2, subLinkName: "Contact" },
        ],
        mapTo: "/page",
      },

      {
        id: "4",
        name: "Submit Recipe",
        subLinks: null,
        mapTo: "/submit-recipe",
      },
    ],
    hover: [false, false, false],
  };
  toggleMouseIn = (id) => {
    let oldState = [...this.state.hover];
    let index = oldState.findIndex((index) => index === true);
    oldState[id - 1] = !oldState[id - 1];
    oldState[index] = !oldState[index];
    this.setState({ hover: oldState });
  };
  toggleMouseOut = (id) => {
    // console.log(this.state.hover);
    // let oldState = [...this.state.hover];
    // oldState[id - 1] = !oldState[id - 1];
    this.setState({ hover: [false, false, false] });
  };

  render() {
    return (
      <MainWrapper>
        <ImgWrapper>
          <Logo src={AppLogo} />
        </ImgWrapper>
        <Navigation>
          <NavigationItem
            listItems={this.state.listItems}
            hover={this.state.hover}
            mouseIn={this.toggleMouseIn}
            mouseOut={this.toggleMouseOut}
          />
        </Navigation>
      </MainWrapper>
    );
  }
}

export default NavigationItems;
