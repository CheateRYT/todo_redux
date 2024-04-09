import React from "react";

const TodoItem = ({ id, text, completed, toggleTodoComplete, removeTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          toggleTodoComplete(id);
        }}
      />
      <span>{text}</span>
      <span
        className="delete"
        onClick={() => {
          removeTodo(id);
        }}
      >
        &#215;
      </span>
    </li>
  );
};

export default TodoItem;
