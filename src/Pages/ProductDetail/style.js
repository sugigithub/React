import styled from "styled-components";

const cartStyles = `
:nth-last-child(1) {
  border-width: 40px;
}
`;
export const ProdWrapper = styled.div`
  width: 50%;
  padding-right: 20px;
  box-sizing: border-box;
`;
export const ProductsWrapper = styled.div`
  width: 950px;
  display: flex;
  margin: 0px auto;
  padding: 20px 0px;
  flex-wrap: wrap;
`;
export const DetailImage = styled.img`
  height: 430px;
`;
export const ProductName = styled.p`
  font-size: 22px;
  color: #606060;
  font-weight: 500;
  padding-top: 30px;
`;
export const ProductRate = styled.p`
  font-weight: 600;
  padding: 10px 0px;
  font-size: 22px;
  color: #888888;
`;
export const ProdDes = styled.p`
  padding: 17px 0px;
  border: 1px solid #ebebeb;
  border-width: 1px 0;
  color: #606060;
  font-size: 16px;
  line-height: 22px;
`;
export const ActionButtons = styled.span`
  padding: 11px 15px;
  color: ${(props) => (props.textColor ? props.textColor : "white")};
  background-color: ${(props) => props.colour};
  border: none;
  outline: none;
  font-size: 14px;
  margin: 20px 0px;
  height: 40px;
  font-weight: bold;
  top: 20px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  :nth-last-child(1) {
    border-left: ${(props) => `2px solid ${props.theme.secondaryColor}`};
    border-width: 0px;
    border-color: ${(props) => props.theme.secondaryColor};
  }
  :hover {
    background-color: ${(props) => props.hoverColor};
    border-color: dimgray;
    transition: all 0.2s ease-in 0s;
  }
  position: relative;
  ${(props) => (props.cart === "true" ? `${cartStyles}` : "")};
`;
export const CartIcon = styled.i`
  color: white;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  height: 55px;
`;
