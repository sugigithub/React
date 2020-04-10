import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import AppLogo from '../../assets/images/logo.jpg';
import NavigationItems from '../../Components/NavigationItem/NavigationItem'
import RecipeBar from '../../Components/RecipeBar/RecipeBar';
import Banner from '../../Components/Banner/Banner';


const MainWrapper = styled.div`
    height: 80px;
    width: 100%;
    // position: fixed;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top:0;
    left:0;
`;

const ImgWrapper = styled.div`
    box-sizing: border-box;
    background-color: white;
    padding: 15px;
    border-radius: 5px;
`;
const Logo = styled.img`

    `;
const Navigation = styled.nav`
    width:700px;
    height:100%;
`;



class Header extends Component {
    state = {
        listItems: [
            { id: '0', name: 'Home' },
            { id: '1', name: 'Demos' },
            { id: '2', name: 'Recipies' },
            { id: '3', name: 'page' },
            { id: '4', name: 'Submit Recipe' }
        ],
        recipeItem: [
            { id: '0', recipe: 'Mexican Grilled Corn Recipe' },
            { id: '1', recipe: 'Roast Chicken With Lemon Gravy' },
            { id: '2', recipe: 'Avocado Melon Salad With Lime Vinaigrette' },
            { id: '3', recipe: 'Chunky Beef Stew' },
        ],
        headerItem: [
            { id: '0', imgUrl: require('../../assets/images/sliderA_01.jpg'), 
            title: 'BAKING', servings: 4, prepTime: '30 mins', author: 'BY SANDRA FORTIN' },
            { id: '1', imgUrl: require('../../assets/images/sliderA_02.jpg'), 
            title: 'CURRY', servings: 4, prepTime: '1 Hr 30 mins', author: 'BY SANDRA FORTIN' },
            { id: '2', imgUrl: require('../../assets/images/sliderA_03.jpg'), 
            title: 'SALADS', servings: 2, prepTime: '15 mins', author: 'BY SANDRA FORTIN' },
            { id: '3', imgUrl: require('../../assets/images/sliderA_04.jpg'), 
            title: 'BEEF', servings: 1, prepTime: '2 Hr 30 mins', author: 'BY SANDRA FORTIN' },
        ],
        selectedHeaderitem :{
            id: '0', imgUrl: require('../../assets/images/sliderA_01.jpg'), title: 'BAKING', servings: 4, prepTime: '30 mins', author: 'BY SANDRA FORTIN'
        },

        activestate:[true,false,false,false],
    }

    clickHandler = (id) =>{
        let oldState = this.state.activestate;
        const index = oldState.findIndex(oldState =>  oldState === true);
        oldState[index] = !oldState[index];
        oldState[id] = true;
        console.log(oldState);
        this.setState({
            selectedHeaderitem : {id:this.state.headerItem[id].id,imgUrl:this.state.headerItem[id].imgUrl,
                title:this.state.headerItem[id].title,prepTime:this.state.headerItem[id].prepTime,servings:this.state.headerItem[id].servings,
                author:this.state.headerItem[id].author
            },
            activestate:oldState,
        },
        
        )

    }

    render() {
        return (
            <Fragment>
                <MainWrapper>
                    <ImgWrapper>
                        <Logo src={AppLogo} />
                    </ImgWrapper>
                    <Navigation>
                        <NavigationItems listItem={this.state.listItems} />
                    </Navigation>
                </MainWrapper>
                <Banner item = {this.state.selectedHeaderitem} heading = {this.state.recipeItem[this.state.selectedHeaderitem.id]}/>
                <RecipeBar recipeItem={this.state.recipeItem}
                 clicked = {this.clickHandler} color = {this.state.activeColor} active = {this.state.activestate}/>
            </Fragment>
        )
    }
}
export default Header;