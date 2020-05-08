import React from "react";
import { shallow } from "enzyme";
import UndoList from "../../components/UndoList";
import { findTestWrapper } from "../../../../utils/testUtils";

it("未完成列表初始化，count为0，列表无内容", () => {
  const wrapper = shallow(<UndoList list={[]} />);
  const countElem = findTestWrapper(wrapper, "count");
  const listItem = findTestWrapper(wrapper, "list-item");
  expect(countElem.text()).toEqual("0");
  expect(listItem.length).toEqual(0);
});

it("未完成列表 有内容时，count为长度，列表不为空", () => {
  const listData = ["ddd", "dddd"];
  const wrapper = shallow(<UndoList list={listData} />);
  const countElem = findTestWrapper(wrapper, "count");
  const listItem = findTestWrapper(wrapper, "list-item");
  expect(countElem.text()).toEqual("2");
  expect(listItem.length).toEqual(2);
});

it("未完成列表 有内容时，存在删除按钮", () => {
  const listData = ["ddd", "dddd"];
  const wrapper = shallow(<UndoList list={listData} />);
  const deleteItem = findTestWrapper(wrapper, "delete-item");
  expect(deleteItem.length).toEqual(2);
});

it("未完成列表 点击某个删除按钮，会调用删除方法", () => {
  const listData = ["ddd", "dddd"];
  const fn = jest.fn();
  const index = 1;
  const wrapper = shallow(<UndoList deleteItem={fn} list={listData} />);
  const deleteItem = findTestWrapper(wrapper, "delete-item");
  deleteItem.at(index).simulate("click");
  expect(fn).toHaveBeenCalledWith(index);
});
