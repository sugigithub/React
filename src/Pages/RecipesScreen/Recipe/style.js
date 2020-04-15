import styled from "styled-components";

export const RecipieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const RecipieCard = styled.div`
  width: ${(props) => (props.listView ? "100%" : "220px")};
  display: ${(props) => (props.listView ? "flex" : "block")};
  margin: 0px 10px 10px 0px;
  background-color: #f2f2f2;
`;

export const RecipieName = styled.h2`
  color: grey;
  font-size: 19px;
  padding-bottom: 20px;
  border-bottom: ${(props) => (props.listView ? "0" : "2px solid #e5e5e5")};
`;
export const Image = styled.img`
  width: ${(props) => (props.listView ? "250px" : "100%")};
  height: 220px;
`;

export const RecipieTitleBox = styled.div`
  width: 100%;
  height: 150px;
  padding: 15px;
  box-sizing: border-box;
`;
export const Time = styled.p`
  text-align: end;
  padding-left: 10px;
  color: gray;
  font-weight: bold;
  font-size: 14px;
`;
export const Duration = styled.div`
  display: flex;
  padding: 7px 0px;
  justify-content: flex-end;
`;
export const Rating = styled.div`
  padding-top: 10px;
`;
export const RecipeDescription = styled.p`
  border-bottom: 1px solid #e5e5e5;
  display: ${(props) => (props.listView ? "block" : "none")};
  color: #808080;
  border-bottom: 2px solid #e5e5e5;
  padding: 0 0 22px;
`;
export const IconsWrapper = styled.div`
  float: right;
  padding-top: 10px;
`;
export const ImageWrapper = styled.div`
position: relative;
`;