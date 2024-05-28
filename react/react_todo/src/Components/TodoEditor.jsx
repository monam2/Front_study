import React, { useRef, useState, useContext } from "react"; // eslint-disable-line no-unused-vars
import { TodoDispatchContext } from "../TodoContext";

const TodoEditor = () => {

  const {onCreate} = useContext(TodoDispatchContext);

  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClick = () => {
    if (!inputRef.current.value) {
      inputRef.current.focus();
      alert("검색어를 입력하세요!");
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onkeydown = (e)=> {
    if (e.key==="Enter") {
      onClick();
    }
  }

  return (
    <div>
      <input onKeyDown={onkeydown} ref={inputRef} value={content} type="text" onChange={onChangeContent} />
      <button onClick={onClick}>추가</button>
    </div>
  );
};

export default TodoEditor;
