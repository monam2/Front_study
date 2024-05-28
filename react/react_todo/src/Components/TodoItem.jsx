import React from 'react' // eslint-disable-line no-unused-vars

const TodoItem = ({todo, deleteHandler}) => {
  return (
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <input type="checkbox" defaultChecked={!!todo.isDone} name="" id="" />
        <div>{todo.content}</div>
        <div>{new Date(todo.createdDate).toDateString()}</div>
        <button onClick={()=>deleteHandler(todo.id)}>삭제</button>
    </div>
  )
}

export default TodoItem