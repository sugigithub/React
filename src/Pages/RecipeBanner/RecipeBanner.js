import React, { Component, Fragment } from "react";

// import styled from "styled-components";

import RecipeBar from "./RecipeBar/RecipeBar";
import Banner from "./Banner/Banner";

class RecipeBanner extends Component {
  headerItem = [
    {
      id: 0,
      imgUrl: require("../../assets/images/sliderA_01.jpg"),
      title: "BAKING",
      recipe: "Mexican Grilled Corn Recipe",
      details: {
        servings: 4,
        prepTime: "30 mins",
        author: "BY SANDRA FORTIN",
      },
    },
    {
      id: 1,
      imgUrl: require("../../assets/images/sliderA_02.jpg"),
      title: "CURRY",
      recipe: "Roast Chicken With Lemon Gravy",
      details: {
        servings: 4,
        prepTime: "1 Hr 30 mins",
        author: "BY SANDRA FORTIN",
      },
    },
    {
      id: 2,
      imgUrl: require("../../assets/images/sliderA_03.jpg"),
      title: "SALADS",
      recipe: "Avocado Melon Salad With Lime Vinaigrette",
      details: {
        servings: 2,
        prepTime: "15 mins",
        author: "BY SANDRA FORTIN",
      },
    },
    {
      id: 3,
      imgUrl: require("../../assets/images/sliderA_04.jpg"),
      title: "BEEF",
      recipe:"Chunky Beef Stew",
      details: {
        servings: 1,
        prepTime: "2 Hr 30 mins",
        author: "BY SANDRA FORTIN",
      },
    },
  ];
  state = {
    selectedHeaderitem: 0,
  };

  clickHandler = (id) => {
    this.setState({ selectedHeaderitem: id });
  };

  render() {
    console.log(this.props.headerData);
    return (
      <Fragment>
        <Banner
          item={this.props.headerData[this.state.selectedHeaderitem]}
        />
        <RecipeBar
          show={true}
          recipeItem={this.props.headerData}
          clicked={this.clickHandler}
          active={this.state.selectedHeaderitem}
        />
      </Fragment>
    );
  }
}
export default RecipeBanner;
