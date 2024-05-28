import React, { useRef, useState } from 'react' // eslint-disable-line no-unused-vars
import './App.css'
import Header from "./Components/Header"
import TodoEditor from "./Components/TodoEditor"
import TodoList from "./Components/TodoList"
import { todo_data } from "./todo_data"

const App = () => {
  const [todos, setTodos] = useState(todo_data);
  const idRef = useRef(todos.length);

  const onCreate = (content)=> {
    const newTodo = {
      id : idRef.current++,
      isDone : false,
      content,
      createdDate : new Date().getTime(),
    }

    setTodos([...todos, newTodo])
  }

  const deleteHandler = (id)=> {
    setTodos([...todos.filter(todo=> todo.id !== id)])
  }
  

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} deleteHandler={deleteHandler} />
    </div>
  )
}

export default App