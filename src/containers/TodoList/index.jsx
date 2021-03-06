import React, { Component } from "react";
import Header from "./components/Header";
import HeaderWithRedux from "./components/HeaderWithRedux";
import UndoList from "./components/UndoList";
import "./style.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      undoList: []
    };
  }

  addUndoItem = value => {
    this.setState({
      undoList: [
        ...this.state.undoList,
        {
          status: "div",
          value
        }
      ]
    });
  };

  deleteItem = index => {
    const { undoList } = this.state;
    undoList.splice(index, 1);
    this.setState({
      undoList
    });
  };

  changeStatus = index => {
    const newList = this.state.undoList.map((item, listIndex) => {
      if (index === listIndex) {
        return {
          ...item,
          status: "input"
        };
      }
      return {
        ...item,
        status: "div"
      };
    });
    this.setState({
      undoList: newList
    });
  };

  handleBlur = index => {
    const newList = this.state.undoList.map((item, listIndex) => {
      if (index === listIndex) {
        return {
          ...item,
          status: "div"
        };
      }
      return item;
    });
    this.setState({
      undoList: newList
    });
  };

  valueChange = (index, value) => {
    const { undoList } = this.state;
    undoList[index].value = value;
    this.setState({
      undoList
    });
  };

  render() {
    const { undoList } = this.state;

    return (
      <div>
        <HeaderWithRedux addUndoItem={this.addUndoItem} />
        {/* <Header addUndoItem={this.addUndoItem} /> */}
        <UndoList
          list={undoList}
          deleteItem={this.deleteItem}
          changeStatus={this.changeStatus}
          handleBlur={this.handleBlur}
          valueChange={this.valueChange}
        />
      </div>
    );
  }
}

export default TodoList;
