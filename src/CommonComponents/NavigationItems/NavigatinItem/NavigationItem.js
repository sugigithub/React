import React, { Fragment } from "react";

import Dropdown from "../Dropdown/Dropdown";
import { ListWrapper, List, DropDownWrapper, StyledLink } from "./style";

const navigationItem = (props) => {
  return (
    <ListWrapper>
      {props.listItems.map((item) => {
        if (item.subLinks == null) {
          return (
            <List key={item.id}>
              <StyledLink
                to={item.mapTo}
                exact
                activeClassName="curLink"
                onClick={item.name == "Log Out" ? props.clicked : null}
              >
                {item.name}
              </StyledLink>
            </List>
          );
        } else {
          return (
            <Fragment key={item.id}>
              <List
                onMouseEnter={() => props.mouseIn(item.id)}
                onMouseLeave={() => props.mouseOut(item.id)}
              >
                <DropDownWrapper>
                  <StyledLink to={item.mapTo} activeClassName="curLink">
                    {item.name}
                  </StyledLink>
                  <i
                    className="fa fa-caret-down"
                    style={{
                      fontSize: "16px",
                      color: "#707070",
                      paddingTop: "35px",
                      marginLeft: "-28px",
                    }}
                  ></i>
                </DropDownWrapper>
                <Dropdown
                  hover={props.hover[item.id - 1]}
                  subLinks={item.subLinks}
                />
              </List>
            </Fragment>
          );
        }
      })}
    </ListWrapper>
  );
};

export default navigationItem;
