import React, { Fragment } from "react";

import Dropdown from "../Dropdown/Dropdown";
import {ListWrapper,List,Link,DropDownWrapper} from './style';

const navigationItem = (props) => {
  return (
    <ListWrapper>
      {props.listItems.map((item) => {
        if (item.subLinks == null) {
          return (
            <List key={item.id} active={item.id}>
              <Link>{item.name}</Link>
            </List>
          );
        } else {
          return (
            <Fragment key={item.id}>
              <List
                active={item.id}
                onMouseEnter={() => props.mouseIn(item.id)}
                onMouseLeave={() => props.mouseOut(item.id)}
              >
                <DropDownWrapper>
                  <Link>{item.name}</Link>
                  <i
                    className="fa fa-caret-down"
                    style={{ fontSize: "16px", color: "#707070" }}
                  ></i>
                </DropDownWrapper>
                <Dropdown hover={props.hover[item.id - 1]} subLinks = {item.subLinks}/>
              </List>
            </Fragment>
          );
        }
      })}
    </ListWrapper>
  );
};

export default navigationItem;
