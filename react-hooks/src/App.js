import { useEffect, useState } from "react";
import Posts from "./components/Posts";
import queryString from "query-string";
import Pagination from "./components/Pagination";
// function createIdGenerator(startId = 0) {
//   let id = startId;
//   return () => id++;
// }
// const getId = createIdGenerator(4);

const API_URL = "http://js-post-api.herokuapp.com/api";

function App() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [filters, setFilters] = useState({ _page: 1, _limit: 10 });

  useEffect(() => {
    (async function fetchPostList() {
      try {
        const paramsStr = queryString.stringify(filters);
        const response = await fetch(`${API_URL}/posts?${paramsStr}`);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch post list:", error.message);
      }
    })();
  }, [filters]);

  function handleOnPageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  return (
    <>
      <Pagination pagination={pagination} onPageChange={handleOnPageChange} />
      <Posts posts={postList} />
    </>
  );
}

// const [todoList, setTodoList] = useState([
//   { id: 1, title: "I love Easy Frontend! 😍 " },
//   { id: 2, title: "We love Easy Frontend! 🥰 " },
//   { id: 3, title: "They love Easy Frontend! 🚀 " },
// ]);
// function handleOnSubmit(todo) {
//   const newTodoList = [...todoList];
//   todo.id = getId();
//   newTodoList.push(todo);
//   setTodoList(newTodoList);
//   console.log(todo);
// }
// function handleOnTodoClick(idx) {
//   const newTodoList = [...todoList];
//   newTodoList.splice(idx, 1);
//   console.log(idx);
//   setTodoList(newTodoList);
// }
// return (
//   <div>
//     <TodoInput onSubmit={handleOnSubmit} />
//     <TodoList todos={todoList} onTodoClick={handleOnTodoClick}></TodoList>
//   </div>
// );
export default App;
