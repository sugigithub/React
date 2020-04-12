import React from "react";
import {ListWrapper ,List ,Link} from './style';


const dropdown = (props) => {
  return (
    <ListWrapper show = {props.hover}>
      <List className="">
        <Link href = "/">Shortcodes</Link>
      </List>
      <List>
        <Link href = "/">Typography</Link>
      </List>
      <List>
        <Link href = "/">Contact</Link>
      </List>
    </ListWrapper>
  );
};

export default dropdown;
