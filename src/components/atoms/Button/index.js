import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const index = (props) => {
  const className = [
    "btn-custom-1",
    "ls-1",
    "text-center",
    "d-block",
    "position-relative",
  ];
  className.push(props.className);

  return (
    <Link className={className.join(" ")} to={props.to}>
      {props.children}
    </Link>
  );
};

index.propTypes = {
  className: propTypes.string,
  to: propTypes.string,
};

export default index;
