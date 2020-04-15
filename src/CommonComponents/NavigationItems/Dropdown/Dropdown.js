import React from "react";
import {ListWrapper ,List ,Link} from './style';


const dropdown = (props) => {
  return (
    <ListWrapper show = {props.hover}>
    {props.subLinks.map(link => (
      <List key = {link.id}>
        <Link href = "/">{link.subLinkName}</Link>
      </List>
    ))}
    </ListWrapper>
  );
};

export default dropdown;
