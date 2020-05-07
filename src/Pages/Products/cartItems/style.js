import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 25%;
  padding-right: 20px;
  box-sizing: border-box;
  height:fit-content;
`;
export const Details = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  padding: 5px 15px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;
export const Image = styled.img`
  width: 30%;
  padding: 10px 15px 10px 0px;
`;
export const Cart = styled.p`
  font-size: 20px;
  color: #606060;
  padding: 15px 0px;
  line-height: 25px;
`;
export const Line = styled.div`
  width: 172px;
  height: 2px;
  background-color: #ebebeb;
  float: right;
  top: 30px;
  margin-bottom: 0px;
  position: ${(props) => (props.cart ? "relative" : "unset")};
`;
export const DetailWrapper = styled.div`
  width: 50%;
  padding: 5px;
`;
export const ProductName = styled.p`
  color: ${(props) => props.color};
  font-weight: 600;
  padding: 4px 0px;
`;
export const CartDetailWrappr = styled.div`
  background-color: #f8f8f8;
  padding: 5px 15px;
  height: 80px;
  text-align: center;
`;
export const LoadIcon = styled.i`
  font-size: 17px;
`;
export const Checkout = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  outline: none;
  color: white;
  font-weight: bold;
  margin-top: 8px;
  border-radius: 4px;
  background-color: ${(props) => props.colour};
  :hover {
    background-color: silver;
  }
`;
export const IconWrapper = styled.div`
  display: ${(props) => (props.show ? "inline" : "none")};
`;
