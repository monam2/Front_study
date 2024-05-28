import React, { useEffect, useReducer, useRef, useState } from "react"; // eslint-disable-line no-unused-vars
import "./App.css";
import Header from "./Components/Header";
import TodoEditor from "./Components/TodoEditor";
import TodoList from "./Components/TodoList";
import { todo_data } from "./todo_data";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];

    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.data ? { ...todo, isDone: !todo.isDone } : todo
      );

    case "DELETE":
      return (state = state.filter((todo) => todo.id !== action.data));
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, todo_data);
  const idRef = useRef(4);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
  };

  const deleteHandler = (id) => {
    dispatch({
      type: "DELETE",
      data: id,
    });
    // setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList
        todos={todos}
        deleteHandler={deleteHandler}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default App;
