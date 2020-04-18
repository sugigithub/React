import React, { Component, Fragment } from "react";
import {withRouter} from 'react-router-dom';

// import styled from "styled-components";

import RecipeBar from "./RecipeBar/RecipeBar";
import Banner from "./Banner/Banner";

class RecipeBanner extends Component {
  state = {
    selectedHeaderitem: 0,
  };

  clickHandler = (id) => {
    this.setState({ selectedHeaderitem: id });
  };
  viewRecipeHandler = () =>{
    this.props.history.push({
      pathname: 'recipe-detail',
      state: {
        detail:this.props.headerData[this.state.selectedHeaderitem]
      }
    });
    window.scrollTo(0, 0);
  }
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Banner
          item={this.props.headerData[this.state.selectedHeaderitem]}
          viewRecipeHandler = {this.viewRecipeHandler}
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
export default withRouter(RecipeBanner);
