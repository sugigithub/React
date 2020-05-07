import styled from "styled-components";

export const AdditionalInfoWrapper = styled.div`
  width: 100%;
  height:200px;
`;
export const ProdDes = styled.p`
  padding: 17px 0px;
  color: #606060;
  font-size: 16px;
  line-height: 22px;
  display: ${(props) => (props.show ? "block" : "none")};
`;
export const Buttonwrapper = styled.div`
  height: 60px;
`;
export const AddInfo = styled.div`
  height: 15px;
  width: 48%;
  background-color: #f8f8f8;
  display: inline-block;
  padding: 15px 1%;
  font-weight: 500;
  color: #666;
  display: ${(props) => (props.show ? "inline-block" : "none")};
`;
export const ReviewWrapper = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;
