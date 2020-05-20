import React, { Component, Fragment } from "react";

import withErrorHandler from '../../hoc/withErrorHandler';
import Input from "../../CommonComponents/Input/Input";
import {
  Wrapper,
  Header,
  HeadingText,
  SubmitRecipeBtn,
  FormWrapper,
  BtnWrapper,
} from "./style";
import axios from "../../axios/axios";
import Loader from "../../CommonComponents/Spinner/Spinner";

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
      directions: {
        label: "Directions",
        elementType: "addMultiple",
        elementConfig: {
          placeholder: ["Enter the Steps"],
        },
        value: [{ value1: "" }],
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
          required: true,
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
        required: true,
        value: "",
      },
    },
    isFormFilled: true,
    users: null,
    errorMsg: null,
    loading: null,
    err:null,
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
    let searchOptions = [];
    for (let i = 0; i < newstate.options.length; i++) {
      if (newstate.options[i].toLowerCase().includes(inpTxt.toLowerCase())) {
        console.log(newstate.options[i]);
        searchOptions.push(newstate.options[i]);
      }
    }
    if (searchOptions.length === 0) {
      searchOptions = [];
    }
    newstate.searchOptions = searchOptions;
    oldstate[data] = newstate;
    this.setState({ formFields: oldstate });
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
  addIngHandler = (event, data) => {
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
  saveRecipeDetail = (event) => {
    event.preventDefault();
    const reviews = [2, 3, 4, 5];
    const bannerImg = ["sliderA_01", "sliderA_02", "sliderA_03", "sliderA_04"];
    const imgurl = [
      "recipeThumb-01",
      "recipeThumb-02",
      "recipeThumb-03",
      "recipeThumb-04",
      "recipeThumb-05",
      "recipeThumb-06",
      "recipeThumb-07",
      "recipeThumb-08",
      "recipeThumb-09",
    ];
    const recipedata = {
      imgUrl: imgurl[Math.floor(Math.random() * imgurl.length)],
      bannerImgUrl: bannerImg[Math.floor(Math.random() * bannerImg.length)],
      name: this.state.formFields.recipeTitle.value,
      title: this.state.formFields.Category.value,
      reviews: reviews[Math.floor(Math.random() * reviews.length)],
      description: this.state.formFields.Summary.value,
      ratings: reviews[Math.floor(Math.random() * reviews.length)],
      details: {
        servings: this.state.formFields.Serves.value,
        prepTime: this.state.formFields.prepTime.value,
        Calories: this.state.formFields.yield.value,
        cooking: this.state.formFields.cookingTime.value,
        author: "By Santro Fortin",
      },
      ingredients: this.state.formFields.ingredients.value.map(
        (data, index) => {
          return data.value1 + " " + data.value2;
        }
      ),
      directions: this.state.formFields.directions.value.map((data, index) => {
        return data.value1;
      }),
    };
    this.setState({ loading: true });
    const config = {
      headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      }
      };
    axios.post("/latest-recipes", recipedata,config).
    then((res) => {
      console.log(res);
      this.setState({ loading: false ,err: null});
    }).
    catch(err=>{
      console.log("dfc")
      this.setState({ err: err });
    });
  };
  render() {
    let form = Object.keys(this.state.formFields);
    let formElements = form.map((data) => (
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
        addIngHandler={(event) => this.addIngHandler(event, data)}
        setIngs={(event, value, index) =>
          this.setIngs(event, value, index, data)
        }
        deleteIngs={(index) => this.deleteIngs(index, data)}
        submit
      />
    ));
    let loadedForm = (
      <FormWrapper autoComplete="off">
        {formElements}
        <SubmitRecipeBtn onClick={(event) => this.saveRecipeDetail(event)}>
          Submit Recipe
        </SubmitRecipeBtn>
      </FormWrapper>
    );
    if (this.state.loading) {
      loadedForm = <Loader />;
    }
    // if(this.state.err){
    //   loadedForm = null;
    // }
    if ((this.state.loading === false&&!this.state.err)) {
      loadedForm = (
        <Fragment>
          <Loader spin />
          <BtnWrapper>
            <SubmitRecipeBtn
              onClick={() => {
                this.setState({ loading: null });
              }}
            >
              Submit more recipe
            </SubmitRecipeBtn>
            <SubmitRecipeBtn
              onClick={() => {
                this.props.history.push("/home");
              }}
            >
              Go to home
            </SubmitRecipeBtn>
          </BtnWrapper>
        </Fragment>
      );
    }
    console.log(this.state.err)
    return (
      <Wrapper>
        <Header>
          <HeadingText>Submit Recipe</HeadingText>
        </Header>
        {loadedForm}
      </Wrapper>
    );
  }
}

export default withErrorHandler(SubmitRecipe,axios);
