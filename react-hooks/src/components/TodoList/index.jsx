import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList({ todos, onTodoClick }) {
  function handleOnTodoClick(idx) {
    if (!onTodoClick) return;
    onTodoClick(idx);
  }

  return (
    <ul className="todo-list">
      {todos.map((todo, idx) => (
        <li key={todo.id} onClick={() => handleOnTodoClick(idx)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
