import React from "react";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";

import { useState } from "react";

function createIdGenerator(startId = 0) {
  let id = startId;
  return () => id++;
}
const getId = createIdGenerator(4);

function TodoPage() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);
  function handleOnSubmit(todo) {
    const newTodoList = [...todoList];
    todo.id = getId();
    newTodoList.push(todo);
    setTodoList(newTodoList);
    console.log(todo);
  }
  function handleOnTodoClick(idx) {
    const newTodoList = [...todoList];
    newTodoList.splice(idx, 1);
    console.log(idx);
    setTodoList(newTodoList);
  }
  return (
    <div>
      <h2>Todos</h2>
      <TodoInput onSubmit={handleOnSubmit} />
      <TodoList todos={todoList} onTodoClick={handleOnTodoClick}></TodoList>
    </div>
  );
}

export default TodoPage;
