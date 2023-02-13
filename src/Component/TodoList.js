import TodoForm from "./TodoForm";
import React, { useState } from "react";
import Todo from "./Todo";
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  // remove todo ......
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };
  // update todo ........
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };
  //
  return (
    <>
      <div className="App">
        <div className="todo-box">
          <h1 className="todo-title">Daily List Todo</h1>
          <TodoForm onSubmit={addTodo} />
          <div className="todo-row">
            <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
