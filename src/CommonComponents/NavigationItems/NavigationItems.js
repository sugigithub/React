import React, { Component } from "react";

import {connect} from 'react-redux';

import {
  MainWrapper,
  ImgWrapper,
  Logo,
  Navigation,
} from "./style";
import AppLogo from "../../assets/images/logo.jpg";
import NavigationItem from "./NavigatinItem/NavigationItem";

class NavigationItems extends Component {
  state = {
    listItems: [
      { id: "0", name: "Home", subLinks: null, mapTo: "/home" },
      {
        id: "1",
        name: "Demos",
        subLinks: [
          { id: 0, subLinkName: "Shortcodes" },
          { id: 1, subLinkName: "Typography" },
          { id: 2, subLinkName: "Contact" },
        ],
        mapTo: "/Demos",
      },
      {
        id: "2",
        name: "Recipes",
        subLinks: [
          { id: 0, subLinkName: "Shortcodes" },
          { id: 1, subLinkName: "Typography" },
          { id: 2, subLinkName: "Contact" },
        ],
        mapTo: "/recipe-detail",
      },
      {
        id: "3",
        name: "products",
        subLinks: [
          { id: 0, subLinkName: "Shortcodes" },
          { id: 1, subLinkName: "Typography" },
          { id: 2, subLinkName: "Contact" },
        ],
        mapTo: "/products",
      },
      {
        id: "4",
        name: "Log Out",
        subLinks: null,
        mapTo: "/",
      },
      {
        id: "5",
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
    this.setState({ hover: [false, false, false] });
  };
  logOutHandler = () =>{
    sessionStorage.setItem("authenticated",false);
    this.props.onLogOut();
  }

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
            clicked=  {this.logOutHandler}
          />
        </Navigation>
      </MainWrapper>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch({ type: "LOGIN" }),
  }
}
export default connect(null,mapDispatchToProps)(NavigationItems);
