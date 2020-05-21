import React, { useState, useEffect } from "react";

import { withTheme } from "styled-components";
import { Redirect } from "react-router-dom";

import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import {
  ProductsWrapper,
  ProdWrapper,
  DetailImage,
  ProductName,
  ProductRate,
  ProdDes,
  ButtonWrapper,
  ActionButtons,
  CartIcon,
} from "./style";

const ProductDetail = (props) => {
  let ProductData = props.location.state;
  const [amount, setAmount] = useState(0);
  
  useEffect(() => {
    sessionStorage.setItem("cartCount", ProductData.count);
    setAmount(parseInt(ProductData.count));
    return () => {
      const data = {
        id: ProductData.id,
        count: parseInt(sessionStorage.getItem("cartCount")),
      };
      sessionStorage.setItem("cartCount", JSON.stringify(data));
    };
  }, []);

  const navigateToProduct = (remove) => {
    if (remove === true) {
      sessionStorage.setItem("cartCount", -1);
    }
    props.history.replace({ path: "/products" });
  };
  const cartItemHandler = (id) => {
    if (id === "Add" && amount < 9) {
      setAmount(parseInt(amount + 1));
      sessionStorage.setItem("cartCount", amount + 1);
    } else if (id === "Sub" && amount > 1) {
      setAmount(amount - 1);
      sessionStorage.setItem("cartCount", amount - 1);
    }
  };
  return ProductData ? (
    <ProductsWrapper>
      <ProdWrapper>
        <DetailImage
          src={require(`./${process.env.PUBLIC_URL}/../../assets/images/${ProductData.imgUrl}.jpg`)}
        />
      </ProdWrapper>
      <ProdWrapper>
        <ProductName>{ProductData.name}</ProductName>
        <ProductRate>₹ {ProductData.price.toFixed(2)}</ProductRate>
        <ProdDes>{ProductData.description}</ProdDes>
        <ButtonWrapper>
          <ActionButtons
            colour="silver"
            hoverColor={props.theme.primaryColor}
            onClick={() => cartItemHandler("Sub")}
          >
            <CartIcon className="fas fa-minus"></CartIcon>
          </ActionButtons>
          <ActionButtons colour="#f8f8f8" textColor="#606060">
            {amount}
          </ActionButtons>
          <ActionButtons
            colour="silver"
            hoverColor={props.theme.primaryColor}
            onClick={() => cartItemHandler("Add")}
          >
            <CartIcon className="fas fa-plus"></CartIcon>
          </ActionButtons>
          &emsp;&emsp;
          <ActionButtons
            colour={props.theme.primaryColor}
            hoverColor="gray"
            font="14px"
            cart="true"
            onClick={navigateToProduct}
          >
            <CartIcon
              className="fas fa-shopping-cart"
              style={{ position: "absolute", left: "-26px", top: "13px" }}
            ></CartIcon>
            Add to cart
          </ActionButtons>
          &emsp;&emsp;
        </ButtonWrapper>
        <ActionButtons
          colour={props.theme.primaryColor}
          hoverColor="gray"
          font="14px"
          cart="true"
          onClick={() => navigateToProduct(true)}
        >
          <CartIcon
            className="fas fa-shopping-cart"
            style={{ position: "absolute", left: "-26px", top: "13px" }}
          ></CartIcon>
          Remove from Cart
        </ActionButtons>
      </ProdWrapper>
      <AdditionalInfo />
    </ProductsWrapper>
  ) : (
    <Redirect
      to={{
        pathname: "/products",
        state: { count: amount },
      }}
    />
  );
};

export default withTheme(ProductDetail);
