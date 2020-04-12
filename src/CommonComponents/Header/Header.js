import React, { Component, Fragment } from "react";

// import styled from "styled-components";

import RecipeBar from "../../Components/RecipeBar/RecipeBar";
import Banner from "../../Components/Banner/Banner";

class Header extends Component {
  state = {
    recipeItem: [
      { id: "0", recipe: "Mexican Grilled Corn Recipe" },
      { id: "1", recipe: "Roast Chicken With Lemon Gravy" },
      { id: "2", recipe: "Avocado Melon Salad With Lime Vinaigrette" },
      { id: "3", recipe: "Chunky Beef Stew" },
    ],
    headerItem: [
      {
        id: "0",
        imgUrl: require("../../assets/images/sliderA_01.jpg"),
        title: "BAKING",
        details: {
          servings: 4,
          prepTime: "30 mins",
          author: "BY SANDRA FORTIN",
        },
      },
      {
        id: "1",
        imgUrl: require("../../assets/images/sliderA_02.jpg"),
        title: "CURRY",
        details: {
          servings: 4,
          prepTime: "1 Hr 30 mins",
          author: "BY SANDRA FORTIN",
        },
      },
      {
        id: "2",
        imgUrl: require("../../assets/images/sliderA_03.jpg"),
        title: "SALADS",
        details: {
          servings: 2,
          prepTime: "15 mins",
          author: "BY SANDRA FORTIN",
        },
      },
      {
        id: "3",
        imgUrl: require("../../assets/images/sliderA_04.jpg"),
        title: "BEEF",
        details: {
          servings: 1,
          prepTime: "2 Hr 30 mins",
          author: "BY SANDRA FORTIN",
        },
      },
    ],
    selectedHeaderitem: {
      id: "0",
      imgUrl: require("../../assets/images/sliderA_01.jpg"),
      title: "BAKING",
      details: {
        servings: 4,
        prepTime: "30 mins",
        author: "BY SANDRA FORTIN",
      },
    },

    activestate: [true, false, false, false],
  };

  clickHandler = (id) => {
    let oldState = [...this.state.activestate];
    const index = oldState.findIndex((oldState) => oldState === true);
    oldState[index] = !oldState[index];
    oldState[id] = true;
    this.setState({
      selectedHeaderitem: {
        id: this.state.headerItem[id].id,
        imgUrl: this.state.headerItem[id].imgUrl,
        title: this.state.headerItem[id].title,
        details:{
          prepTime: this.state.headerItem[id].details.prepTime,
          servings: this.state.headerItem[id].details.servings,
          author: this.state.headerItem[id].details.author,
        }
      },
      activestate: oldState,
    });
  };

  render() {
    return (
      <Fragment>
        <Banner
          item={this.state.selectedHeaderitem}
          heading={this.state.recipeItem[this.state.selectedHeaderitem.id]}
        />
        <RecipeBar
          show={true}
          recipeItem={this.state.recipeItem}
          clicked={this.clickHandler}
          color={this.state.activeColor}
          active={this.state.activestate}
        />
      </Fragment>
    );
  }
}
export default Header;
