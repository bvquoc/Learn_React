import React, { useState } from 'react';
import TodoList from '../components/TodoList';

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Code',
      status: 'new',
    },
    {
      id: 3,
      title: 'Sleep',
      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState('all');

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    console.log(newTodoList[idx]);
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: todoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };

  return (
    <div className="todo-list">
      <h3>Todo List</h3>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default TodoFeature;
