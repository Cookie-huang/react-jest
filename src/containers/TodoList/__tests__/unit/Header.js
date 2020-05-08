import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";
import { findTestWrapper } from "../../../../utils/testUtils";

it("Header 快照", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

it("Header 组件包含一个 input  框", () => {
  const wrapper = shallow(<Header />);
  const inputElem = findTestWrapper(wrapper, "input");
  expect(inputElem).toHaveLength(1);
});

it("Header input 初始值为空", () => {
  const wrapper = shallow(<Header />);
  const inputElem = findTestWrapper(wrapper, "input");
  expect(inputElem).toHaveProp("value", "");
});

it("Header input 随用户输入操作改变", () => {
  const wrapper = shallow(<Header />);
  const inputElem = findTestWrapper(wrapper, "input");
  const userInput = "user input xxxxxxx";
  inputElem.simulate("change", {
    target: { value: userInput }
  });
  expect(wrapper.state("value")).toBe(userInput);
});

it("Header 组件 input 框输入回车时，如果 input 无内容， 无操作", () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn} />);
  const inputElem = findTestWrapper(wrapper, "input");
  wrapper.setState({ value: "" });
  inputElem.simulate("keyUp", {
    keyCode: 13
  });
  expect(fn).not.toHaveBeenCalled();
});

it("Header 组件 input 框输入回车时，如果 input 有内容， 函数有被调用 且 input 框清空", () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn} />);
  const inputElem = findTestWrapper(wrapper, "input");
  const value = "学习 jest";
  wrapper.setState({ value });
  inputElem.simulate("keyUp", {
    keyCode: 13
  });
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenLastCalledWith(value);

  const newInputElem = findTestWrapper(wrapper, "input");
  expect(newInputElem.prop("value")).toBe("");
});
