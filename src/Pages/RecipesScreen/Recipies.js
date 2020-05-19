import React, { Component, Fragment } from "react";

import { recipesDetail } from "../../Data/Recipe";
import HomePageRecipe from "./HomePageRecipe/HomePageRecipe";
import axios from "../../axios/axios";

class recipesScreen extends Component {
  componentDidMount() {
    if (this.props.location.state != null) {
      this.setState({ searchText: this.props.location.state.searchText });
      this.filterRecipe(this.props.location.state.searchText);
    }
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split("#");
      if (hashParts.length === 2) {
        const hash = hashParts[1];
        document.getElementById(hash).scrollIntoView();
        document.getElementById(hash).focus();
      }
    };
    scrollToAnchor();
    this.getRecipes();
  }

  state = {
    latestRecipes: null,
    listView: false,
    searchRecipe: null,
    searchText: "",
  };
  getRecipes = () => {
    axios.get("/latest-recipes.json").then((res) => {
      console.log(Object.values(res.data));
      let latestRecipes = [];
      Object.values(res.data).map((data,index) => {
        const structure = {
          id: index,
          imgUrl: data.imgUrl,
          bannerImgUrl: data.bannerImgUrl,
          name: data.name,
          title: data.title,
          reviews: data.reviews,
          description: data.description,
          ratings: data.ratings,
          details: {
            servings: data.details.servings,
            prepTime: data.details.prepTime,
            Calories: data.details.Calories,
            cooking: data.details.cooking,
            author: data.details.author,
          },
          ingredients: data.ingredients.map((data, index) => {
            return data;
          }),
          directions: data.directions.map((data, index) => {
            return data;
          }),
        };
        latestRecipes.push(structure);
      });
      console.log(latestRecipes);
    });
  };
  filterRecipe = (text) => {
    let tempRecipeArray = [];
    recipesDetail.filter((data) => {
      if (data.name.toLowerCase().includes(text)) {
        return tempRecipeArray.push(data);
      }
    });
    this.setState({ searchRecipe: tempRecipeArray });
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
    const searchText = event.target.value;
    this.setState({ searchText: searchText });
    this.filterRecipe(searchText);
  };

  viewAllRecipeHandler = () => {
    this.setState({ searchRecipe: null, searchText: "" });
  };

  render() {
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
          searchText={this.state.searchText}
        />
      </Fragment>
    );
  }
}

export default recipesScreen;
