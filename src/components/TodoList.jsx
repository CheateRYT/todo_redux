import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodoComplete, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodoComplete={toggleTodoComplete}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
