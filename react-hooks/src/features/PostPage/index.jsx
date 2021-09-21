import React from "react";
import { useEffect, useState } from "react";
import queryString from "query-string";
import Posts from "../../components/Posts";
import Pagination from "../../components/Pagination";

const API_URL = "http://js-post-api.herokuapp.com/api";

function PostPage() {
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
      <h2>Post list</h2>
      <Posts posts={postList} />
      <Pagination pagination={pagination} onPageChange={handleOnPageChange} />
    </>
  );
}

export default PostPage;
