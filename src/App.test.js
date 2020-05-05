import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

test("renders learn react link", () => {
  const wrapper = shallow(<App />);
  // expect(wrapper.find(".app").length).toBe(1);
  // console.log(wrapper.debug());
  const container = wrapper.find(".app");
  // console.log(wrapper.find(".app").prop("title"));

  expect(container).toHaveLength(1);
  expect(container).toExist();
  expect(container).toHaveProp("title", "hello");
});
