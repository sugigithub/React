import React, { Component } from "react";

import { RecipesScreenWrapper, RecipeWrapper, SideBar } from "./style";
import Recipe from "./Recipe/Recipie";
import Author from "../Author/Author";
import SearchBar from "../../CommonComponents/SearchRecipe/SearchRecipe";
import RecipeScreenTop from "./RecipeScreenTop/RecipeScreenTop";
import RecipeDetailScreen from "../RecipeDetailScreen/RecipeDetailScreen";

class recipesScreen extends Component {
  recipesDetail = [
    {
      id: 0,
      imgUrl: require("../../assets/images/recipeThumb-01.jpg"),
      name: "Mexican Grilled Corn Recipe",
      description:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      details: {
        servings: 4,
        prepTime: "30 mins",
        ratings: 3,
        Calories: "632 kcal",
        author: "BY SANDRA FORTIN",
      },
      ingredients: [
        "2 pounds cubed beef stew meat",
        "3 tablespoons vegetable oil",
        "4 cubes beef bouillon, crumbled",
        "1 large onion, chopped",
        "1 teaspoon dried rosemary",
        "1/2 teaspoon ground black pepper",
        "3 large potatoes, peeled and cubed",
        "4 carrots, cut into 1 inch pieces",
        "4 stalks celery, cut into 1 inch pieces",
      ],
      directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
        "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
        "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
      ],
    },
    {
      id: 1,
      imgUrl: require("../../assets/images/recipeThumb-02.jpg"),
      name: "Choclate Cake With Green Tea Cream",
      description:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      details: {
        servings: 3,
        prepTime: "1 HR 30 mins",
        ratings: 4,
        Calories: "632 kcal",
        author: "BY SANDRA FORTIN",
      },
      ingredients: [
        "2 pounds cubed beef stew meat",
        "3 tablespoons vegetable oil",
        "4 cubes beef bouillon, crumbled",
        "1 large onion, chopped",
        "1 teaspoon dried rosemary",
        "1/2 teaspoon ground black pepper",
        "3 large potatoes, peeled and cubed",
        "4 carrots, cut into 1 inch pieces",
        "4 stalks celery, cut into 1 inch pieces",
      ],
      directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
        "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
        "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
      ],
    },
    {
      id: 2,
      imgUrl: require("../../assets/images/recipeThumb-03.jpg"),
      name: "Thai Yellow Curry Chicken",
      description:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      details: {
        servings: 2,
        prepTime: "45 mins",
        Calories: "632 kcal",
        ratings: 4,
        author: "BY SANDRA FORTIN",
      },
      ingredients: [
        "2 pounds cubed beef stew meat",
        "3 tablespoons vegetable oil",
        "4 cubes beef bouillon, crumbled",
        "1 large onion, chopped",
        "1 teaspoon dried rosemary",
        "1/2 teaspoon ground black pepper",
        "3 large potatoes, peeled and cubed",
        "4 carrots, cut into 1 inch pieces",
        "4 stalks celery, cut into 1 inch pieces",
      ],
      directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
        "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
        "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
      ],
    },
    {
      id: 3,
      imgUrl: require("../../assets/images/recipeThumb-04.jpg"),
      name: "Avocado Melon Salad With Lime Vinaigrette",
      description:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      details: {
        servings: 1,
        prepTime: "15 mins",
        ratings: 3,
        Calories: "632 kcal",
        author: "BY SANDRA FORTIN",
      },
      ingredients: [
        "2 pounds cubed beef stew meat",
        "3 tablespoons vegetable oil",
        "4 cubes beef bouillon, crumbled",
        "1 large onion, chopped",
        "1 teaspoon dried rosemary",
        "1/2 teaspoon ground black pepper",
        "3 large potatoes, peeled and cubed",
        "4 carrots, cut into 1 inch pieces",
        "4 stalks celery, cut into 1 inch pieces",
      ],
      directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
        "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
        "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
      ],
    },
    {
      id: 4,
      imgUrl: require("../../assets/images/recipeThumb-05.jpg"),
      name: "Sweet Chilli and Lime Chicken Wings",
      description:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      details: {
        servings: 2,
        prepTime: "45 mins",
        ratings: 5,
        Calories: "632 kcal",
        author: "BY SANDRA FORTIN",
      },
      ingredients: [
        "2 pounds cubed beef stew meat",
        "3 tablespoons vegetable oil",
        "4 cubes beef bouillon, crumbled",
        "1 large onion, chopped",
        "1 teaspoon dried rosemary",
        "1/2 teaspoon ground black pepper",
        "3 large potatoes, peeled and cubed",
        "4 carrots, cut into 1 inch pieces",
        "4 stalks celery, cut into 1 inch pieces",
      ],
      directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
        "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
        "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
      ],
    },
    {
      id: 5,
      imgUrl: require("../../assets/images/recipeThumb-06.jpg"),
      name: "Pollo Borracho With Homemade Tortillas",
      description:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      details: {
        servings: 1,
        prepTime: "30 mins",
        ratings: 3,
        Calories: "632 kcal",
        author: "BY SANDRA FORTIN",
      },
      ingredients: [
        "2 pounds cubed beef stew meat",
        "3 tablespoons vegetable oil",
        "4 cubes beef bouillon, crumbled",
        "1 large onion, chopped",
        "1 teaspoon dried rosemary",
        "1/2 teaspoon ground black pepper",
        "3 large potatoes, peeled and cubed",
        "4 carrots, cut into 1 inch pieces",
        "4 stalks celery, cut into 1 inch pieces",
      ],
      directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
        "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
        "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
      ],
    },
    {
      id: 6,
      imgUrl: require("../../assets/images/recipeThumb-07.jpg"),
      name: "Roast Chicken With Lemon Gravy",
      description:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      details: {
        servings: 4,
        prepTime: "1 HR 20 mins",
        ratings: 4,
        Calories: "632 kcal",
        author: "BY SANDRA FORTIN",
      },
      ingredients: [
        "2 pounds cubed beef stew meat",
        "3 tablespoons vegetable oil",
        "4 cubes beef bouillon, crumbled",
        "1 large onion, chopped",
        "1 teaspoon dried rosemary",
        "1/2 teaspoon ground black pepper",
        "3 large potatoes, peeled and cubed",
        "4 carrots, cut into 1 inch pieces",
        "4 stalks celery, cut into 1 inch pieces",
      ],
      directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
        "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
        "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
      ],
    },
    {
      id: 7,
      imgUrl: require("../../assets/images/recipeThumb-08.jpg"),
      name: "Chunky Beef Stew",
      description:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      details: {
        servings: 4,
        prepTime: "2 HR 30 mins",
        ratings: 3,
        Calories: "632 kcal",
        author: "BY SANDRA FORTIN",
      },
      ingredients: [
        "2 pounds cubed beef stew meat",
        "3 tablespoons vegetable oil",
        "4 cubes beef bouillon, crumbled",
        "1 large onion, chopped",
        "1 teaspoon dried rosemary",
        "1/2 teaspoon ground black pepper",
        "3 large potatoes, peeled and cubed",
        "4 carrots, cut into 1 inch pieces",
        "4 stalks celery, cut into 1 inch pieces",
      ],
      directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
        "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
        "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
      ],
    },
    {
      id: 8,
      imgUrl: require("../../assets/images/recipeThumb-09.jpg"),
      name: "Farmhouse Vegetable And Barley Soup",
      description:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      details: {
        servings: 4,
        prepTime: "30 mins",
        ratings: 5,
        Calories: "632 kcal",
        author: "BY SANDRA FORTIN",
      },
      ingredients: [
        "2 pounds cubed beef stew meat",
        "3 tablespoons vegetable oil",
        "4 cubes beef bouillon, crumbled",
        "1 large onion, chopped",
        "1 teaspoon dried rosemary",
        "1/2 teaspoon ground black pepper",
        "3 large potatoes, peeled and cubed",
        "4 carrots, cut into 1 inch pieces",
        "4 stalks celery, cut into 1 inch pieces",
      ],
      directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
        "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
        "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
      ],
    },
  ];

  state = {
    listView: false,
  };
  listViewHandler = () => {
    const oldState = this.state.listView;
    this.setState({ listView: !oldState });
  };

  ingredientSelected = (id) => {
    console.log(id);
  };
  render() {
    return (
      <RecipesScreenWrapper>
        <RecipeWrapper>
          <RecipeScreenTop
            listView={this.state.listView}
            clicked={this.listViewHandler}
          />
          <Recipe
            recipedetails={this.recipesDetail}
            listView={this.state.listView}
          />
          <RecipeDetailScreen
            detail={this.recipesDetail[0]}
            clicked={this.ingredientSelected}
          />
        </RecipeWrapper>

        <SideBar>
          <SearchBar />
          <Author />
        </SideBar>
      </RecipesScreenWrapper>
    );
  }
}

export default recipesScreen;
