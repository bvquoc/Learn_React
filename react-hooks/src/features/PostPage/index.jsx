import queryString from "query-string";
import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import PostFiltesForm from "../../components/PostFiltersForm";
import Posts from "../../components/Posts";

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
  function handleFiltersChange(formValues) {
    const newFilters = { ...filters, ...formValues, _page: 1 };
    console.log(newFilters);
    setFilters(newFilters);
  }
  return (
    <>
      <h2>Post list</h2>
      <PostFiltesForm onSubmit={handleFiltersChange} />
      <Posts posts={postList} />
      <Pagination pagination={pagination} onPageChange={handleOnPageChange} />
    </>
  );
}

export default PostPage;
