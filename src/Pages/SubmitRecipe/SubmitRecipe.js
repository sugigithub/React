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
const SubmitRecipeBtn = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 0;
  height: 40px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #808080;
  }
  width:150px;
  border-radius:3px;
`;
const FormWrapper = styled.form`
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
        label: "Description",
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
        elementType: "addMultiple",
        elementConfig: {
          placeholder: ["Enter the Steps"],
        },
        value: [{ value1: "", value2: "" }],
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
      yield: {
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
      Serves: {
        label: "Serves",
        elementType: "select",
        elementConfig: {
          type: "text",
          placeholder: "Select",
        },
        options: [
          "2 peoples",
          "3 peoples",
          "4 peoples",
          "6 peoples",
          "More than 6",
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
  setDropdownValue = (data, value) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate.data };
    newstate.value = value;
    oldstate[data].value = newstate.value;
    this.setState({ formFields: oldstate });
  };
  uploadImage = (event, data) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate[data] };
    newstate.value = URL.createObjectURL(event.target.files[0]);
    oldstate[data].value = newstate.value;
    this.setState({ formFields: oldstate });
  };
  addIngHandler = (event,data) => {
    event.preventDefault();
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate[data] };
    let tmp = [...newstate.value];
    if (newstate.value[0].hasOwnProperty("value2")) {
      tmp.push({ value1: "", value2: "" });
    } else {
      tmp.push({ value1: "" });
    }
    newstate.value = tmp;
    oldstate[data] = newstate;
    this.setState({ formFields: oldstate });
  };
  setIngs = (event, value, index, data) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate[data] };
    let tmp = [...newstate.value];
    let tmpObj = { ...tmp[index] };
    if (value === "quantity") {
      tmpObj.value1 = event.target.value;
    } else if (value === "name") {
      tmpObj.value2 = event.target.value;
    }
    tmp[index] = tmpObj;
    newstate.value = tmp;
    oldstate[data] = newstate;
    this.setState({ formFields: oldstate });
  };
  deleteIngs = (index, data) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate[data] };
    let tmp = [...newstate.value];
    tmp.splice(index, 1);
    newstate.value = tmp;
    oldstate[data] = newstate;
    this.setState({ formFields: oldstate });
  };
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
        setDropdown={(val) => this.setDropdownValue(data, val)}
        filterAndSaveValues={(event) => {
          this.filterAndSaveValues(event, data);
        }}
        toogleShow={() => this.toogleShow(data)}
        addIngHandler={(event) => this.addIngHandler(event,data)}
        setIngs={(event, value, index) =>
          this.setIngs(event, value, index, data)
        }
        deleteIngs={(index) => this.deleteIngs(index, data)}
        submit
      />
    ));
    return (
      <Wrapper>
        <Header>
          <HeadingText>Submit Recipe</HeadingText>
        </Header>
        <FormWrapper>
          {formElements}
          <SubmitRecipeBtn>Submit Recipe</SubmitRecipeBtn>
        </FormWrapper>
      </Wrapper>
    );
  }
}

export default SubmitRecipe;
