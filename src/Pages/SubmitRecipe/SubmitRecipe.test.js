import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Input from '../../CommonComponents/Input/Input';

import {SubmitRecipe} from "./SubmitRecipe";

configure({ adapter: new Adapter() });

describe("<Navigation Items />", () => {
  it("should render two navigation items if not authenticated", () => {
      const wrapper = shallow(<SubmitRecipe />);
    expect(wrapper.find(Input)).toHaveLength(9);
  });
});