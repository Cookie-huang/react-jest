import React from "react";
import { shallow } from "enzyme";
import TodoList from "../../index";

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

  /* 不要耦合 */
  // expect(Header.prop("addUndoItem")).toBe(wrapper.instance().addUndoItem);
  expect(Header.prop("addUndoItem")).toBeTruthy();
});

it("当 addUndoItem 触发时，undoList 应该新增内容", () => {
  const wrapper = shallow(<TodoList />);

  /* 单位测试 写法  没有跟其他单位(组件)耦合 */
  const value = "学习Jest";
  wrapper.instance().addUndoItem(value);

  /* 注释的是集成写法 */
  // const Header = wrapper.find("Header");
  // const addFunc = Header.prop("addUndoItem");
  // addFunc(userInput);
  expect(wrapper.state("undoList").length).toBe(1);
  expect(wrapper.state("undoList")[0]).toBe(value);
});

it("TodoList 应该给 undoList 传递 list 数据和 deleteItem 方法", () => {
  const wrapper = shallow(<TodoList />);
  const UndoList = wrapper.find("UndoList");
  // expect(UndoList.prop("deleteItem")).toBe(wrapper.instance().deleteItem);
  // expect(UndoList.prop("list")).toEqual(wrapper.state("undoList"));
  expect(UndoList.prop("deleteItem")).toBeTruthy();
  expect(UndoList.prop("list")).toBeTruthy();
});

it("当 deleteItem 触发时，undoList 应该删除对应内容", () => {
  const wrapper = shallow(<TodoList />);
  wrapper.setState({
    undoList: ["ddd", "aaaa"]
  });
  const index = 1;
  wrapper.instance().deleteItem(index);
  // const UndoList = wrapper.find("UndoList");
  // const addFunc = UndoList.prop("deleteItem");
  // addFunc(index);
  expect(wrapper.state("undoList").length).toBe(1);
  expect(wrapper.state("undoList")).toEqual(["ddd"]);
});
