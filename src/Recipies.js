import React from 'react';
import styled from 'styled-components';
import Recipe1 from './assets/images/recipeThumb-01.jpg';
import Recipe2 from './assets/images/recipeThumb-02.jpg';
import Recipe3 from './assets/images/recipeThumb-03.jpg';



const RecipieWrapper = styled.div`
    width:75%;
    display:flex;
    padding-top: 20px;
`;
const RecipieCard = styled.div`
    width: 32%;
    margin-right:1.33%;
    background-color:#F2F2F2;
`;

const RecipieName = styled.h2`
    color:grey;
    font-size: 19px;
    padding-bottom:20px;
    border-bottom: 2px solid #e5e5e5;
`;
const Image = styled.img`
    width:100%;
    height:220px;
`;

const RecipieTitleBox = styled.div`
    width:100%;
    height:150px;
    padding:15px;
    box-sizing: border-box;
    `;
const Time = styled.p`
    text-align: end;
    padding: 10px 0px;
    color: gray;
    font-weight: bold;
`;
const recipie = (props) => {
    return (
        <RecipieWrapper>
            <RecipieCard>
                <Image src={Recipe1} />
                <RecipieTitleBox><RecipieName>Mexican Grilled Corn Recipe</RecipieName>
                <Time>45 mins</Time>
                </RecipieTitleBox>
                
            </RecipieCard>
            <RecipieCard>
                <Image src={Recipe2} />
                <RecipieTitleBox><RecipieName>Mexican Grilled Corn Recipe</RecipieName>
                <Time>45 mins</Time>
                </RecipieTitleBox>
            </RecipieCard>
            <RecipieCard>
                <Image src={Recipe3} />
                <RecipieTitleBox><RecipieName>Mexican Grilled Corn Recipe</RecipieName>
                <Time>45 mins</Time>
                </RecipieTitleBox>
            </RecipieCard>
        </RecipieWrapper>
    );
}

export default recipie;