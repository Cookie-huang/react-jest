import React from "react";
import { shallow } from "enzyme";
import UndoList from "../../components/UndoList";
import { findTestWrapper } from "../../../../utils/testUtils";

describe("UndoList 组价", () => {
  it("初始化，count为0，列表无内容", () => {
    const wrapper = shallow(<UndoList list={[]} />);
    const countElem = findTestWrapper(wrapper, "count");
    const listItem = findTestWrapper(wrapper, "list-item");
    expect(countElem.text()).toEqual("0");
    expect(listItem.length).toEqual(0);
  });

  it(" 有内容时，count为长度，列表不为空", () => {
    const listData = [
      { status: "div", value: "ddd" },
      { status: "div", value: "aaa" }
    ];
    const wrapper = shallow(<UndoList list={listData} />);
    const countElem = findTestWrapper(wrapper, "count");
    const listItem = findTestWrapper(wrapper, "list-item");
    expect(countElem.text()).toEqual("2");
    expect(listItem.length).toEqual(2);
  });

  it(" 有内容时，存在删除按钮", () => {
    const listData = [
      { status: "div", value: "ddd" },
      { status: "div", value: "aaa" }
    ];
    const wrapper = shallow(<UndoList list={listData} />);
    const deleteItem = findTestWrapper(wrapper, "delete-item");
    expect(deleteItem.length).toEqual(2);
  });

  it(" 点击某个删除按钮，会调用删除方法", () => {
    const listData = [
      { status: "div", value: "ddd" },
      { status: "div", value: "aaa" }
    ];
    const fn = jest.fn();
    const index = 1;
    const wrapper = shallow(<UndoList deleteItem={fn} list={listData} />);
    const deleteItem = findTestWrapper(wrapper, "delete-item");
    deleteItem.at(index).simulate("click");
    expect(fn).toHaveBeenLastCalledWith(index);
  });

  it("点击某一项时，会调用 changeStatus 方法", () => {
    const listData = [
      { status: "div", value: "ddd" },
      { status: "div", value: "aaa" }
    ];
    const fn = jest.fn();
    const index = 1;
    const wrapper = shallow(<UndoList changeStatus={fn} list={listData} />);
    const deleteItem = findTestWrapper(wrapper, "list-item");
    deleteItem.at(index).simulate("click");
    expect(fn).toHaveBeenLastCalledWith(index);
  });

  it("当某一项状态是input时候，展示输入框", () => {
    const listData = [
      { status: "input", value: "ddd" },
      { status: "div", value: "aaa" }
    ];
    const wrapper = shallow(<UndoList list={listData} />);
    const inputElem = findTestWrapper(wrapper, "input");
    expect(inputElem).toHaveLength(1);
  });

  it("当某一个输入框失去焦点，触发 handleBlur 方法", () => {
    const listData = [
      { status: "input", value: "ddd" },
      { status: "div", value: "aaa" }
    ];
    const index = 0;
    const fn = jest.fn();
    const wrapper = shallow(<UndoList handleBlur={fn} list={listData} />);
    const inputElem = findTestWrapper(wrapper, "input");
    inputElem.simulate("blur");
    expect(fn).toHaveBeenLastCalledWith(index);
  });

  it("当某一个输入框改变时，触发 valueChange 方法", () => {
    const listData = [
      { status: "input", value: "ddd" },
      { status: "div", value: "aaa" }
    ];
    const index = 0;
    const value = "ccc";
    const fn = jest.fn();
    const wrapper = shallow(<UndoList valueChange={fn} list={listData} />);
    const inputElem = findTestWrapper(wrapper, "input");
    inputElem.simulate("change", {
      target: {
        value
      }
    });
    expect(fn).toHaveBeenLastCalledWith(index, value);
  });
});
