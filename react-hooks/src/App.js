import { useState } from "react";
import TodoList from "./components/TodoList/index.jsx";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  function handleOnTodoClick(idx) {
    const newTodoList = [...todoList];
    newTodoList.splice(idx, 1);
    console.log(idx);
    setTodoList(newTodoList);
  }

  return <TodoList todos={todoList} onTodoClick={handleOnTodoClick}></TodoList>;
}

export default App;
