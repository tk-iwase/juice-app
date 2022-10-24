import React from "react";
import useCollapse from "react-collapsed";

const Button = () => {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div>
      <button {...getToggleProps()}>
        {isExpanded ? '折りたたむ' : '展開'}
      </button>
      <section {...getCollapseProps()}>Collapsed content 🙈</section>
    </div>
  );
};

export default Button;