import styled from 'styled-components';

export const ProductsPageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
export const ProductsHeader = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: 100px;
`;
export const ProductsText = styled.p`
  font-size: 24px;
  font-weight: 500;
  width: 960px;
  height: 100%;
  color: #606060;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
export const ProductsWrapper = styled.div`
  width: 950px;
  display: flex;
  margin: 0px auto;
  padding: 20px 0px;
`;

export const Items = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  height:fit-content;
  padding-top: 30px;
`;
export const ProductCard = styled.div`
  width: 220px;
  display: block;
  margin: 0px 15px 15px 0px;
  background-color: #f2f2f2;
  position: relative;
  cursor: pointer;
  height:fit-content;
`;
export const Image = styled.img`
  height: 220px;
  width: 220px;
  /* background-image: url(${(props) => props.imgPath}); */
`;
export const ProductsDetail = styled.div`
  width: 100%;
  color: #606060;
  text-align: center;
  height:95px;
`;
export const Species = styled.p`
  padding: 10px;
  font-size: 12px;
  font-weight: 700;
  color: #aaa;
`;
export const ProductName = styled.p`
  font-size: 16px;
`;
export const ProductRate = styled.p`
  font-weight: bold;
  padding: 10px;
  color: #606060;
`;
export const AddToCart = styled.div`
  height: 0px;
  width: 42px;
  background-color: transparent;
  position: absolute;
  left: 178px;
  top: 220px;
  transition: all 0.2s ease-in 0s;
  ${ProductCard}:hover & {
    height: 42px;
    top: 178px;
    background-color: ${props => props.theme.primaryColor};
    transition: all 0.2s ease-in 0s;
  }
`;
export const CartIcon = styled.i`
  color: transparent;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;
  ${ProductCard}:hover & {
    display: block;
    color: white;
  }
`;
export const ProdWrapper = styled.div`
  width: 50%;
  padding: 0px 10px;
  box-sizing: border-box;
`;