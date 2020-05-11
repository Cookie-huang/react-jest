import React, { Component } from "react";
import { connect } from "react-redux";
import { actionTypes } from "../store";

class HeaderWithRedux extends Component {
  handleInputKeyUp = e => {
    const { value } = this.props;

    if (e.keyCode === 13 && value) {
      this.props.addUndoItem(value);
      this.props.handleInputChange("");
    }
  };

  render() {
    const { value, handleInputChange } = this.props;
    return (
      <div className="header">
        <div className="header-content">
          TodoList
          <input
            className="header-input"
            placeholder="Todo"
            data-test="input"
            value={value}
            onChange={e => handleInputChange(e.target.value)}
            onKeyUp={this.handleInputKeyUp}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.todo.inputValue
  };
};

const mapDispatch = dispatch => {
  return {
    handleInputChange(value) {
      dispatch({
        type: actionTypes.CHANGE_INPUT_VALUE,
        value
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatch)(HeaderWithRedux);
