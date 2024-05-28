import React, { useState } from 'react' // eslint-disable-line no-unused-vars
import TodoItem from './TodoItem';

const TodoList = ({todos, deleteHandler}) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e)=> {
        setSearch(e.target.value);
    }

    const filterTodos = ()=> {
        if (search === "") {
            return todos;
        }

        return todos.filter(todo=>todo.content.toLowerCase().includes(search.toLowerCase()))
    }

  return (
    <div>
        <h4>Todos</h4>
        <input type="text" onChange={onChangeSearch} placeholder="검색어를 입력하세요."/>
        <div className="todos_wrapper">
    {
        filterTodos().map(todo=><TodoItem key={todo.id} todo={todo} deleteHandler={deleteHandler}/>)
    }

            
        </div>
    </div>
  )
}

export default TodoList