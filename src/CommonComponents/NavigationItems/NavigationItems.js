import React, { Component, Fragment } from "react";

import {
  MainWrapper,
  ImgWrapper,
  Logo,
  Navigation,
  ListWrapper,
  List,
  Link,
  DropDownWrapper,
} from "./style";
import AppLogo from "../../assets/images/logo.jpg";
import Dropdown from "./Dropdown/Dropdown";

class NavigationItems extends Component {
  state = {
    listItems: [
      { id: "0", name: "Home" },
      { id: "1", name: "Demos" },
      { id: "2", name: "Recipies" },
      { id: "3", name: "page" },
      { id: "4", name: "Submit Recipe" },
    ],
    hover: [false, false, false],
    dropdownItems: [{}, {}, {}],
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
          <ListWrapper>
            {this.state.listItems.map((item) => {
              if (item.id === "0" || item.id === "4") {
                return (
                  <List key={item.id} active={item.id}>
                    <Link>{item.name}</Link>
                  </List>
                );
              } else {
                return (
                  <Fragment key={item.id}>
                    <List
                      active={item.id}
                      onMouseEnter={() => this.toggleMouseIn(item.id)}
                      onMouseLeave={() => this.toggleMouseOut(item.id)}
                    >
                      <DropDownWrapper>
                        <Link>{item.name}</Link>
                        <i
                          className="fa fa-caret-down"
                          style={{ fontSize: "16px", color: "#707070" }}
                        ></i>
                      </DropDownWrapper>
                      <Dropdown hover={this.state.hover[item.id - 1]} />
                    </List>
                  </Fragment>
                );
              }
            })}
          </ListWrapper>
        </Navigation>
      </MainWrapper>
    );
  }
}

export default NavigationItems;
