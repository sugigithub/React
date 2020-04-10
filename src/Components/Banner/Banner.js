import React from 'react';
import styled from 'styled-components';


const BannerWrapper = styled.div`
    height: 415px;
    // margin-top:80px;
    position:relative;
`;

const BannerImg = styled.img`
    height:100%;
    width:100%;

`;
const BannerOverlay = styled.div`
    height: 415px;
    margin-top:80px;
    background: #333;
    width: 100%;
    position: absolute;
    display: block;
    opacity: 0.5;
    top:0;
`;

const Text = styled.h2`
    color:#fff;
    font-size: 50px;
    padding: 20px 0px;
    width:60%;
`;
const ViewRecipieBtn = styled.button`
    border: 3px solid #fff;
    display: inline-block;
    background-color: rgba(255,255,255,.2);
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    padding: 10px 0;
    width: 130px;
    text-align: center
`;
const OverlayContet = styled.div`
    position: absolute;
    top: 80px;
    padding: 60px 50px;
    height: 100px;
`;
const Icons = styled.div`
    padding: 20px 0px;
`;
const IconText = styled.span`
    font-size:13px;
    color:white;
    font-weight:bold;
    padding: 0px 25px 0px 10px;
`;

const RecipieBtn = styled.button`
    display: inline-block;
    background-color: #8DC63F;
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 0;
    width: 70px;
    border: none;
    text-align: center;
`

const banner = (props) => (

    <div>
        <BannerWrapper>
            <BannerImg src={props.item.imgUrl} alt="banner image" ></BannerImg>
        </BannerWrapper>
        <BannerOverlay>
        </BannerOverlay>
        <OverlayContet>
            <RecipieBtn>{props.item.title}</RecipieBtn>
            <Text>{props.heading.recipe}</Text>
            <ViewRecipieBtn>VIEW RECIPIE</ViewRecipieBtn>
            <Icons>
                <i className="fas fa-utensils" style={{ color: "white" }}> </i><IconText>${props.item.servings} servings</IconText>
                <i className="fas fa-clock" style={{ color: "white" }}></i><IconText>{props.item.prepTime}</IconText>
                <i className="fas fa-user" style={{ color: "white" }}></i><IconText>{props.item.author}</IconText>
            </Icons>
        </OverlayContet>
    </div>
);

export default banner;

