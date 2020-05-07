import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "../../index";

Enzyme.configure({ adapter: new Adapter() });

it("TodoList 初始化列表为空", () => {
  const wrapper = shallow(<TodoList />);
  //   expect(wrapper.state("undoList").length).toBe(0);
  expect(wrapper.state("undoList")).toHaveLength(0);
});

it("TodoList 应该给 Header 传递一个增加 undoList 内容的方法", () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find("Header");
  // console.log(wrapper);
  // console.log(wrapper.instance());

  // console.log(Header.prop("addUndoItem"));

  expect(Header.prop("addUndoItem")).toBe(wrapper.instance().addUndoItem);
});

it("当 Header 回车时，undoList 应该新增内容", () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find("Header");
  const addFunc = Header.prop("addUndoItem");
  const userInput = "学习Jest";
  addFunc(userInput);
  expect(wrapper.state("undoList").length).toBe(1);
  expect(wrapper.state("undoList")[0]).toBe(userInput);
});
