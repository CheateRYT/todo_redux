import React from "react";

const TodoForm = ({ text, handleInputTodoText, handleButtonAddTodo }) => {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          handleInputTodoText(e.target.value);
        }}
      />
      <button onClick={handleButtonAddTodo}>Add todo</button>
    </div>
  );
};

export default TodoForm;
