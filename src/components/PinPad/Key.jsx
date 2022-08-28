import React from "react";

const Key = ({
  id,
  value,
  display,
  onTouchAction = (val) => {},
  onClickAction = (val) => {},
  customClass = "",
}) => {
  let className = `default-btn num-btn ${customClass}`;
  let displayValue = typeof display === "undefined" ? value : display;

  let handleTouchAction = (e) => {
    e.preventDefault();
    onTouchAction(value, e, displayValue);
  };

  let handleClickAction = (e) => {
    e.preventDefault();
    onClickAction(value, e, displayValue);
  };

  return (
    <button
      id={id}
      key={id}
      className={className}
      data-value={value}
      onTouchStart={handleTouchAction}
      onClick={handleClickAction}
    >
      {displayValue}
    </button>
  );
};

export default Key;
