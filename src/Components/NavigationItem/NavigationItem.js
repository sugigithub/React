import React from 'react';
import styled from 'styled-components';



const ListWrapper = styled.ul`
    height: 100%;
    list-style-type: none;
    display: flex;
    margin: 0;
    justify-content: space-around;
    align-items: center
`;

const List = styled.li`
    box-sizing: border-box;
    display: block;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content:center;
    height:100%;
    &:hover {
        border-bottom: 7px solid #8DC63F;
        margin-bottom:-7px;
      }
`;
const Link = styled.a`
    color:#707070;
    display:block;
    box-sizing: border-box;
    text-decoration: none;
`;

const navigationItems = (props) => {

    const list = props.listItem.map(item => {
        return (
            <List key={item.id}>
                <Link>{item.name}</Link>
            </List>
        );
    })
    return (
        <ListWrapper>
            {list}
        </ListWrapper>
    );
}

export default navigationItems;