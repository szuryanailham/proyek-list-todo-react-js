import { BiEditAlt } from "react-icons/bi";
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiDeleteBinFill } from "react-icons/ri";
function Todo({ todos, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div key={index}>
      <div className="todo-col" key={todo.id}>
        {todo.text}
        <div className="todo-icons">
          <BiEditAlt onClick={() => setEdit({ id: todo.id, value: todo.text })} className="todo-edit" />
          <RiDeleteBinFill
            onClick={() => {
              removeTodo(todo.id);
            }}
            className="todo-remove"
          />
        </div>
      </div>
    </div>
  ));
}
export default Todo;
