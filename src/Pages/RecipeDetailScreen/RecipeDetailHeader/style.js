import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 220px;
  background-image: url('${(props) => props.url}');
  background-size:cover;
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
`;