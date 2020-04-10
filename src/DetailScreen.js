import React from 'react';
import styled from 'styled-components';
import Recipes from './Recipies';


const DetailScreenWrapper = styled.div`
    width:950px;
    margin:0 auto;
`;
const detailScreen = (props) => {
    return (
        <DetailScreenWrapper >
            <Recipes />
            <Recipes />
        </DetailScreenWrapper>
    )
}

export default detailScreen;