import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
  // handleChange......
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  // handleSubmit ..........
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input onChange={handleChange} className="todo-input-edit" placeholder="edit your todo....." value={input} />
            <button onClick={handleSubmit} className="todo-submit-edit">
              Edit
            </button>
          </>
        ) : (
          <>
            <input onChange={handleChange} className="todo-input" placeholder="add your todo....." value={input} />
            <button onClick={handleSubmit} className="todo-submit">
              Submit
            </button>
          </>
        )}
      </form>
    </>
  );
}

export default TodoForm;
