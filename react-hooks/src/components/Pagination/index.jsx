import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination({ pagination, onPageChange }) {
  const { _page, _limit, _totalRows } = pagination;
  const lastPage = Math.ceil(_totalRows / _limit);

  function handleOnPageChange(newPage) {
    if (!onPageChange) return;
    onPageChange(newPage);
  }

  return (
    <div>
      <div>
        <button
          disabled={_page <= 1}
          onClick={() => handleOnPageChange(_page - 1)}
        >
          Prev
        </button>
        <button
          disabled={_page >= lastPage}
          onClick={() => handleOnPageChange(_page + 1)}
        >
          Next
        </button>
      </div>
      <div>
        On page: {_page}/{lastPage}
      </div>
    </div>
  );
}

export default Pagination;
