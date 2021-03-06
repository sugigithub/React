import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import CartItem from "../cartItems/CartItems";
import Loader from "../../../CommonComponents/Spinner/Spinner";
import axios from "../../../axios/axios";
import withErrorHandler from "../../../hoc/withErrorHandler";
import PurchaseSuccess from "../PurchaseSuccess/PurchaseSuccess";
import {
  ProductCard,
  Image,
  AddToCart,
  ProductsDetail,
  Species,
  ProductName,
  ProductRate,
  CartIcon,
  ProductsWrapper,
  Items,
  ProductsText,
} from "../style";

export class ProductsMain extends Component {
  state = {
    shopDetails: null,
    cartItems: [],
    loading: false,
    error: false,
    purchaseSuccess: false,
  };

  componentDidMount() {
    axios
      .get("/shop-item.json?auth=" + this.props.idToken.idToken)
      .then((res) => {
        let cartData = [];
        const data = res.data;
        cartData = data.map((item, index) => {
          return {
            id: index,
            imgUrl: item.imgUrl,
            name: item.name,
            price: item.price,
            description: item.description,
            itemDesc: item.itemDesc,
            additionalInfo: {
              weight: item.additionalInfo.weight,
            },
          };
        });
        this.setState({ shopDetails: cartData, error: false });
        this.storeCartItems();
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  storeCartItems = () => {
    var cartData = JSON.parse(sessionStorage.getItem("cartData")) || [];
    var cartCount = JSON.parse(sessionStorage.getItem("cartCount")) || null;
    if (cartCount) {
      const index = (() => {
        for (let i = 0; i < cartData.length; i++) {
          if (parseInt(cartCount.id) === cartData[i].id) {
            return i;
          }
        }
      })();
      if (parseInt(cartCount.count) === -1 && index !== undefined) {
        cartData.splice(index, 1);
      } else if (index === undefined && parseInt(cartCount.count) > 0) {
        let cartItem = this.state.shopDetails[parseInt(cartCount.id)];
        let newCart = {
          ...cartItem,
          count: parseInt(cartCount.count),
        };
        cartData.push(newCart);
      } else if (parseInt(cartCount.count) > 0) {
        cartData[index].count = parseInt(cartCount.count);
      }
    }
    sessionStorage.setItem("cartData", JSON.stringify(cartData));
    this.setState({ cartItems: cartData });
    sessionStorage.removeItem("cartCount");
  };
  addToCartHandler = (id) => {
    let cartItem = this.state.shopDetails[id];
    let oldCart = this.state.cartItems;
    let i = this.findId(id);
    if (i !== null) {
      oldCart[i].count = oldCart[i].count + 1;
      this.setState({ cartItems: oldCart });
      sessionStorage.setItem("cartData", JSON.stringify(this.state.cartItems));
      return;
    }
    const newCartItem = {
      ...cartItem,
      count: 1,
    };
    oldCart.push(newCartItem);
    this.setState({ cartItems: oldCart });
    sessionStorage.setItem("cartData", JSON.stringify(this.state.cartItems));
  };

  findId = (id) => {
    for (let i = 0; i < this.state.cartItems.length; i++) {
      if (id === this.state.cartItems[i].id) {
        return i;
      }
    }
    return null;
  };
  checkoutHandler = () => {
    this.setState({ loading: true });
    axios
      .post(
        "/orders.json?auth=" + this.props.idToken.idToken,
        this.state.cartItems
      )
      .then((res) => {
        this.setState({ loading: false, cartItems: [], purchaseSuccess: true });
        sessionStorage.removeItem("cartData");
      })
      .catch((err) => {
        this.setState({ loading: false, purchaseSuccess: false });
      });
  };
  showDetailHandler = (product) => {
    const index = this.findId(product.id);
    let count = 0;
    if (index !== null) count = this.state.cartItems[index].count;
    this.props.history.push({
      pathname: "products/" + product.name,
      state: { ...product, count },
    });
    document.getElementById("wrapper").scrollTop = document.getElementById(
      "nav"
    ).offsetTop;
  };
  setPurchase = () => {
    this.setState({ purchaseSuccess: false });
  };
  render() {
    let productCards = <Loader />;
    if (this.state.error) {
      productCards = <ProductsText>Something went wrong</ProductsText>;
    }
    if (this.state.purchaseSuccess) {
      productCards = <PurchaseSuccess click={this.setPurchase} />;
    }
    if (this.state.shopDetails && !this.state.purchaseSuccess) {
      productCards = this.state.shopDetails.map(
        (product) =>
          (productCards = (
            <ProductCard key={product.id}>
              <Image
                src={require(`./${process.env.PUBLIC_URL}/../../../assets/images/${product.imgUrl}.jpg`)}
                alt = {product.imgUrl}
                onClick={() => this.showDetailHandler(product)}
              />
              <AddToCart onClick={() => this.addToCartHandler(product.id)}>
                <CartIcon className="fas fa-shopping-cart"></CartIcon>
              </AddToCart>
              <ProductsDetail>
                <Species>SPICES</Species>
                <ProductName>{product.name}</ProductName>
                <ProductRate>₹ {product.price}.00</ProductRate>
              </ProductsDetail>
            </ProductCard>
          ))
      );
    }
    return (
      <ProductsWrapper>
        <CartItem
          cartItems={this.state.cartItems}
          checkoutHandler={this.checkoutHandler}
          loading={this.state.loading}
        />
        <Items>{productCards}</Items>
      </ProductsWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    idToken: state.idToken,
  };
};
export default connect(mapStateToProps)(
  withErrorHandler(withRouter(ProductsMain), axios)
);
