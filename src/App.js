import React from "react";
import TodoList from "./containers/TodoList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
