import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFiltesForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltesForm.defaultProps = {
  onSubmit: null,
};

function PostFiltesForm({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleOnSubmit(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = { title_like: value };
      onSubmit(formValue);
    }, 300);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => handleOnSubmit(e)}
      />
    </form>
  );
}

export default PostFiltesForm;
