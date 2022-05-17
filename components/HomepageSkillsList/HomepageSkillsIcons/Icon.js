import React from "react";
import PropTypes from "prop-types";

const Icon = ({ children }) => <i>{children}</i>;

Icon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Icon;
