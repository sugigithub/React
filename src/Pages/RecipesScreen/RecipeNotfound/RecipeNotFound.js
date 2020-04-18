import React from 'react';

import {NotFoundText,ViewAllBtn,NotFoundWrapper} from './style';

const recipeNotFound = (props) =>(
    <NotFoundWrapper>
        <NotFoundText>Nothing found...</NotFoundText>
        <ViewAllBtn onClick = {props.viewAllRecipe}>View All Recipe</ViewAllBtn>
    </NotFoundWrapper>
)

export default recipeNotFound;