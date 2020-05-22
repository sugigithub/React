import React from "react";

import {
  CartWrapper,
  Line,
  Cart,
  Details,
  Image,
  DetailWrapper,
  ProductName,
  CartDetailWrappr,
  LoadIcon,
  Checkout,
  IconWrapper,
} from "./style";
import { withTheme } from "styled-components";

const cartItems = (props) => {
  const findSubTotal = () => {
    let total = 0;
    props.cartItems.map((data) => {
      return (total = data.count * data.price + total);
    });
    return total;
  };
  return (
    <CartWrapper>
      <Line cart />
      <Cart>Cart</Cart>
      {props.cartItems.length ? (
        props.cartItems.map((item) => (
          <Details key={item.id}>
            <Image
              src={require(`./${process.env.PUBLIC_URL}/../../../assets/images/${item.imgUrl}.jpg`)}
              alt = {item.imgUrl}
            />
            <DetailWrapper>
              <ProductName color="#606060">{item.name}</ProductName>
              <ProductName color="#909090">
                {item.count} X {item.price}
              </ProductName>
            </DetailWrapper>
            <Line />
          </Details>
        ))
      ) : (
        <CartDetailWrappr>
          <Cart>
            Cart is empty ...
            <br />
            Add products to it
          </Cart>
        </CartDetailWrappr>
      )}
      {props.cartItems.length ? (
        <CartDetailWrappr>
          <ProductName color="#606060">
            Subtotal ₹{findSubTotal()}.00
          </ProductName>
          <Checkout
            onClick={props.checkoutHandler}
            disabled={props.loading}
            colour={props.loading ? "silver" : props.theme.primaryColor}
          >
            &emsp;CHECKOUT &emsp;
            <IconWrapper show={props.loading}>
              <LoadIcon className="fas fa-cog fa-spin"></LoadIcon>
            </IconWrapper>
          </Checkout>
        </CartDetailWrappr>
      ) : null}
    </CartWrapper>
  );
};

export default withTheme(cartItems);
