import React from "react";
import { mount } from "enzyme";
import { findTestWrapper } from "../../../../utils/testUtils";
import TodoList from "../../index";
import { Provider } from "react-redux";
import store from "../../../../store";

it(`
    1. Header 输入框输入内容
    2. 点击回车
    3. 列表中展示用户输入的内容项
`, () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
  const inputElem = findTestWrapper(wrapper, "input");
  const content = "dddd";
  inputElem.simulate("change", {
    target: { value: content }
  });
  inputElem.simulate("keyUp", {
    keyCode: 13
  });
  const listItem = findTestWrapper(wrapper, "list-item");
  expect(listItem).toHaveLength(1);
  expect(listItem.text()).toContain(content);
});
