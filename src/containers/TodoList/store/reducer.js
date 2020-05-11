import * as actionTypes from "./actionTypes";

const defaultState = {
  inputValue: ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUT_VALUE:
      return { inputValue: action.value };
    default:
      return state;
  }
};
