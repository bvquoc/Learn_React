import React from "react";
import PropTypes from "prop-types";

Posts.propTypes = {
  posts: PropTypes.array,
};

Posts.defaultProps = {
  posts: [],
};

function Posts({ posts }) {
  return (
    <ul className="todo-list">
      {posts.map((item, idx) => (
        <li key={item.id} onClick={() => {}}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
