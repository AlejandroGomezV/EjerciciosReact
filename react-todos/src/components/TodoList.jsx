import React from "react";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li>Tarea</li>
      ))}
    </ul>
  );
};

export default TodoList;
