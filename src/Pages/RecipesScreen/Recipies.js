import React, { Component, Fragment } from "react";

import { recipesDetail } from "../../Data/Recipe";
import HomePageRecipe from "./HomePageRecipe/HomePageRecipe";

class recipesScreen extends Component {
  state = {
    listView: false,
    searchRecipe: null,
  };

  listViewHandler = () => {
    const oldState = this.state.listView;
    this.setState({ listView: !oldState });
  };

  showDetailHandler = (id) => {
    this.props.history.push({
      pathname: "recipe-detail",
      state: {
        detail: recipesDetail[id],
      },
    });
    window.scrollTo(0, 0);
  };
  searchRecipeHandler = (event) => {
    // console.log(event.target.value);
    const searchText = event.target.value;
    let tempRecipeArray = [];
    recipesDetail.filter((data) => {
      if (data.name.toLowerCase().includes(searchText)) {
        tempRecipeArray.push(data);
      }
    });
    this.setState({ searchRecipe: tempRecipeArray });
    console.log(this.state.searchRecipe);
  };

  viewAllRecipeHandler = () => {
    this.setState({ searchRecipe: null });
  };
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <HomePageRecipe
          recipesDetail={
            this.state.searchRecipe === null
              ? recipesDetail
              : this.state.searchRecipe
          }
          headerData={recipesDetail.slice(0, 4)}
          listView={this.state.listView}
          listViewHandler={this.listViewHandler}
          showDetailHandler={this.showDetailHandler}
          searchRecipeHandler={this.searchRecipeHandler}
          viewAllRecipe={this.viewAllRecipeHandler}
        />
      </Fragment>
    );
  }
}

export default recipesScreen;
