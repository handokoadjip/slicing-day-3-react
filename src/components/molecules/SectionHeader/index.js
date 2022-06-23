import { Button } from "components/atoms";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section id="richard">
      <div className="container-fluid">
        <div className="row min-vh-100">
          <div className="col-lg-6 d-flex flex-column justify-content-end justify-content-xl-between position-relative p-0">
            <div className="wrapper pb-lg-5">
              <div className="position-xl-absolute top-xl-50 start-xl-0 translate-xl-middle-y text-uppercase px-5 text-jumbotron">
                <h2 className="fs-4 text-border-bottom text-border-top">
                  spring
                </h2>
                <h2 className="fs-4 text-border-bottom py-3">collection</h2>
                <h1 className="display-1 fw-bold pt-3 pb-lg-5">shop</h1>
              </div>
            </div>
            <div className="wrapper bg-title-1 d-flex align-items-center">
              <div className="p-5 h-xxl-75">
                <h2 className="fs-4 text-border-bottom text-uppercase fw-bold mb-4">
                  richard
                </h2>
                <p className="w-75 ls-1 leading-loose ff-brygada ">
                  A tropical leaf, with delightful shapes perfect for offices
                  and workpaces
                </p>
                <Button to="#">Add to cart</Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 bg-image-1 d-flex flex-column justify-content-end position-relative">
            <div className="d-flex justify-content-end align-items-end align-items-xxl-center pb-4 px-5 text-menu-plant">
              <div className="d-flex flex-column justify-content-end text-end p-xl-5 h-xxl-75 ls-1 fw-bold position-relative z-999">
                <Link className="d-block" to="#richard">
                  richard
                </Link>
                <Link className="d-block" to="#philip">
                  philip
                </Link>
                <Link className="d-block" to="#olivia">
                  olivia
                </Link>
                <Link className="d-block" to="#grace">
                  grace
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
