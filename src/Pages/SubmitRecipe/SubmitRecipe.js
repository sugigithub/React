import React, { Component, Fragment } from "react";

import styled from "styled-components";

import Input from "../../CommonComponents/Input/Input";
import { array } from "prop-types";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: 100px;
`;

const HeadingText = styled.p`
  font-size: 24px;
  font-weight: 500;
  width: 950px;
  height: 100%;
  color: #606060;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  width: 950px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: 20px 0px;
`;

class SubmitRecipe extends Component {
  state = {
    formFields: {
      recipeTitle: {
        label: "Recipe Title",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter the title",
        },
        value: "",
      },
      Category: {
        label: "Choose Category",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Select",
        },
        value: "",
      },
      Summary: {
        label: "Short Summary",
        elementType: "textarea",
        elementConfig: {
          type: "text",
          maxLength: "500",
          placeholder: "Type the summary here..",
          cols: "5",
        },
        value: "",
      },
      Category: {
        label: "Choose Category",
        elementType: "select",
        elementConfig: {
          type: "text",
          placeholder: "Select",
        },
        options: [
          "Breakfast",
          "Lunch",
          "Beverages",
          "Appetizers",
          "Soups",
          "Salads",
          "Beef",
          "Poultry",
          "Pork",
          "Vegetarian",
          "Seafood",
          "Vegetables",
          "Desserts",
          "Freezing",
          "Bread",
        ],
        searchOptions: [],
        value: "",
        arrow: "down",
      },
      directions: {
        label: "Directions",
        elementType: "textarea",
        elementConfig: {
          type: "text",
          maxLength: "500",
          placeholder: "Type the directions here..",
          cols: "5",
        },
        value: "",
      },
      ingredients: {
        label: "Ingredients",
        elementType: "addMultiple",
        elementConfig: {
          placeholder: [
            "Quantity and Additional Info",
            "Name of the ingredient",
          ],
        },
        value: [{ value1: "", value2: "" }],
      },
      yeild: {
        label: "yeild",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "yeild",
        },
        value: "",
      },
      prepTime: {
        label: "Preparation Time",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Preparation time",
        },
        value: "",
      },
      Allergens: {
        label: "Choose Allergens",
        elementType: "select",
        elementConfig: {
          type: "text",
          placeholder: "Select",
        },
        options: [
          "Peanut",
          "Milk",
          "Egg",
          "Wheat",
          "Soy",
          "Fish",
          "Shell Fish",
          "Tree Nuts",
        ],
        searchOptions: [],
        value: "",
        arrow: "down",
      },
      cookingTime: {
        label: "Cooking Time",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Cooking time",
        },
        value: "",
      },
      upload: {
        label: "Upload your photos",
        elementType: "file",
        elementConfig: {
          type: "file",
        },
        value: "",
      },
    },
    isFormFilled: true,
    users: null,
    errorMsg: null,
  };
  componentDidMount() {}
  saveValues = (event, data) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate.data };
    newstate.value = event.target.value;
    oldstate[data].value = newstate.value;
    this.setState({ formFields: oldstate });
  };
  filterAndSaveValues = (event, data) => {
    this.saveValues(event, data);
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate[data] };
    newstate.value = event.target.value;
    const inpTxt = event.target.value;
    console.log(newstate.searchOptions);
    let searchOptions = [];
    for (let i = 0; i < newstate.options.length; i++) {
      if (newstate.options[i].toLowerCase().includes(inpTxt.toLowerCase())) {
        console.log(newstate.options[i]);
        searchOptions.push(newstate.options[i]);
      }
    }
    console.log(searchOptions);
    if (searchOptions.length === 0) {
      searchOptions = [];
    }
    newstate.searchOptions = searchOptions;
    oldstate[data] = newstate;
    this.setState({ formFields: oldstate });
    // newstate.options.
  };
  dropDownHandler = (data, state) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate[data] };
    newstate.arrow = state;
    oldstate[data] = newstate;
    this.setState({ formFields: oldstate });
  };
  setDropdownValue = (event,value) => {
    console.log(value);
  };
  uploadImage = (event, data) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate[data] };
    newstate.value = URL.createObjectURL(event.target.files[0]);
    oldstate[data].value = newstate.value;
    this.setState({ formFields: oldstate });
  };
  addIngHandler = (data) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate[data] };
    let tmp = [...newstate.value];
    tmp.push({ value1: "", value2: "" });
    newstate.value = tmp;
    oldstate[data] = newstate;
    this.setState({ formFields: oldstate });
  };
  setIngs = (event, data, index) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate.ingredients };
    let tmp = [...newstate.value];
    let tmpObj = { ...tmp[index] };
    if (data === "quantity") {
      tmpObj.value1 = event.target.value;
    } else if (data === "name") {
      tmpObj.value2 = event.target.value;
    }
    tmp[index] = tmpObj;
    newstate.value = tmp;
    oldstate.ingredients = newstate;
    this.setState({formFields:oldstate})
  };
  deleteIngs = (index) =>{
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate.ingredients };
    let tmp = [...newstate.value];
    tmp.splice(index, 1);
    newstate.value = tmp;
    oldstate.ingredients = newstate;
    this.setState({formFields:oldstate});
  }
  render() {
    let form = Object.keys(this.state.formFields);
    const formElements = form.map((data) => (
      <Input
        onFocus={() => this.dropDownHandler(data, "up")}
        onBlur={() => this.dropDownHandler(data, "down")}
        key={data}
        formConfig={this.state.formFields[data]}
        id={data}
        options={
          this.state.formFields[data].searchOptions == ""
            ? this.state.formFields[data].options
            : this.state.formFields[data].searchOptions
        }
        saveValues={(event) => {
          this.saveValues(event, data);
        }}
        uploadImage={(event) => this.uploadImage(event, data)}
        setDropdown={this.setDropdownValue}
        filterAndSaveValues={(event) => {
          this.filterAndSaveValues(event, data);
        }}
        toogleShow={() => this.toogleShow(data)}
        addIngHandler={() => this.addIngHandler(data)}
        setIngs={this.setIngs}
        deleteIngs = {this.deleteIngs}
        submit
      />
    ));
    return (
      <Wrapper>
        <Header>
          <HeadingText>Submit Recipe</HeadingText>
        </Header>
        <FormWrapper>{formElements}</FormWrapper>
      </Wrapper>
    );
  }
}

export default SubmitRecipe;
