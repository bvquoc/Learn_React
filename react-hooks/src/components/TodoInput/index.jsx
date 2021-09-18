import React, { useState } from "react";
import PropTypes from "prop-types";

TodoInput.propTypes = {
  onSubmit: PropTypes.func,
};

TodoInput.defaultProps = {
  onSubmit: null,
};

function TodoInput({ onSubmit }) {
  const [todo, setTodo] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    if (todo.trim() !== "") onSubmit({ title: todo });
    setTodo("");
  }

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <input
        type="text"
        placeholder="Add todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
}

export default TodoInput;
