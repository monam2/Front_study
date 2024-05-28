import React, { memo, useContext } from "react"; // eslint-disable-line no-unused-vars
import { TodoDispatchContext } from "../TodoContext";

const TodoItem = ({todo}) => {
  const { onUpdate, deleteHandler } = useContext(TodoDispatchContext);

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <input
        type="checkbox"
        onChange={() => {
          onUpdate(todo.id);
        }}
        defaultChecked={!!todo.isDone}
        name=""
        id=""
      />
      <div>{todo.content}</div>
      <div>{new Date(todo.createdDate).toDateString()}</div>
      <button onClick={() => deleteHandler(todo.id)}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);
