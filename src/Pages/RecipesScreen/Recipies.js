import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import { recipesDetail } from "../../Data/Recipe";
import HomePageRecipe from "./HomePageRecipe/HomePageRecipe";
import axios from "../../axios/axios";
import withErrorHandler from "../../hoc/withErrorHandler";



class recipesScreen extends Component {
  componentDidMount() {
    if (this.props.location.state != null) {
      this.setState({ searchText: this.props.location.state.searchText });
    }
    window.location.hash = window.decodeURIComponent(window.location.hash);
    this.getRecipes();
    // this.getIdTokenOnExpiry();
  }
  scrollToAnchor = () => {
    const hashParts = window.location.hash.split("#");
    if (hashParts.length === 2) {
      const hash = hashParts[1];
      document.getElementById(hash).scrollIntoView();
      document.getElementById(hash).focus();
    }
  };

  state = {
    latestRecipes: null,
    listView: false,
    searchRecipe: null,
    searchText: "",
    loading: true,
  };

  getRecipes = () => {
    axios
      .get("/latest-recipes.json?auth=" + this.props.idToken.idToken)
      .then((res) => {
        let latestRecipes = [];
        latestRecipes = Object.values(res.data).map((data, index) => {
          return {
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
            ingredients: data.ingredients.map((data) => {
              return data;
            }),
            directions: data.directions.map((data) => {
              return data;
            }),
          };
        });
        this.setState({ loading: false });
        this.setState({ latestRecipes: latestRecipes.reverse() });
        if (this.state.searchText.length > 0) {
          this.scrollToAnchor();
          this.filterRecipe(this.state.searchText);
        }
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  };
  filterRecipe = (text) => {
    let tempRecipeArray = [];
    this.state.latestRecipes.filter((data) => {
      if (data.name.toLowerCase().includes(text.toLowerCase())) {
        return tempRecipeArray.push(data);
      }
      return "";
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
        detail: this.state.latestRecipes[id],
      },
    });
    document.getElementById("wrapper").scrollTop = document.getElementById(
      "nav"
    ).offsetTop;
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
              ? this.state.latestRecipes
              : this.state.searchRecipe
          }
          headerData={recipesDetail.slice(0, 4)}
          listView={this.state.listView}
          listViewHandler={this.listViewHandler}
          showDetailHandler={this.showDetailHandler}
          searchRecipeHandler={this.searchRecipeHandler}
          viewAllRecipe={this.viewAllRecipeHandler}
          searchText={this.state.searchText}
          loading={this.state.loading}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    idToken: state.idToken,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLoggingIn: () => dispatch({ type: "LOGIN" }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(recipesScreen, axios));
