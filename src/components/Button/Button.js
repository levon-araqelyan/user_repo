import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { children } = props;

  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired
};

export default Button;
