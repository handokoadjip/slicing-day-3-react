import React from "react";
import { Button } from "..";
import propTypes from "prop-types";

const index = (props) => {
  const className = [
    "col-lg-6",
    "d-flex",
    "justify-content-center",
    "align-items-center",
  ];
  className.push(props.className);

  return (
    <div className={className.join(" ")}>
      <div className="wrapper text-center">
        <h2 className="display-5 text-border-bottom-center text-uppercase mb-5">
          {props.title}
        </h2>
        <p className="ff-brygada w-75 ls-1 leading-loose mb-5 mx-auto">
          {props.description}
        </p>
        <Button className="position-relative mx-auto" to="#">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

index.propTypes = {
  className: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
};

export default index;
