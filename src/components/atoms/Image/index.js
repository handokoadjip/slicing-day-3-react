import React from "react";
import propTypes from "prop-types";

const index = (props) => {
  const className = ["col-lg-6"];
  className.push(props.className);

  return <div className={className.join(" ")}></div>;
};

index.propTypes = {
  className: propTypes.string,
};

export default index;
