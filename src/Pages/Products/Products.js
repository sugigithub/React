import React from "react";

import { Route, Switch } from "react-router-dom";

import { ProductsPageWrapper, ProductsHeader, ProductsText } from "./style";
import ProductsMain from "./ProductsMain/ProductsMain";
import ProductDetail from "../ProductDetail/ProductDetail";

const Products = () => {
  return (
    <ProductsPageWrapper>
      <ProductsHeader>
        <ProductsText>Products</ProductsText>
      </ProductsHeader>
      <Switch>
        <Route path="/products" exact component={ProductsMain} />
        <Route path="/products/:id" exact component={ProductDetail} />
      </Switch>
    </ProductsPageWrapper>
  );
};

export default Products;
