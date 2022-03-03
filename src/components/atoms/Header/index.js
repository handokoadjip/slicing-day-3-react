import React from "react";

const index = (props) => {
  return (
    <header className="min-vh-100 position-relative mb-3">
      {props.children}
    </header>
  );
};

export default index;
