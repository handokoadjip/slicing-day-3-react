import { Description, Image } from "components/atoms";
import React from "react";

const index = () => {
  const lists = [
    {
      image: "bg-image-1",
      title: "PHILIP",
      description:
        "A tropical leaf, with delightful shapes perfect for offices and workpaces",
      href: "#",
    },
    {
      image: "bg-image-2",
      title: "OLIVIA",
      description:
        "A tropical leaf, with delightful shapes perfect for offices and workpaces",
      href: "#",
    },
    {
      image: "bg-image-3",
      title: "GRACE",
      description:
        "A tropical leaf, with delightful shapes perfect for offices and workpaces",
      href: "#",
    },
  ];

  return (
    <>
      {lists ? (
        lists.map((list, index) => {
          return (
            <section id={list.title} key={`content-${index}`}>
              <div className="container-fluid">
                <div className="row min-vh-100">
                  <Image className={`${list.image} ${index % 2 === 0 ? "order-0 order-lg-1" : ""}`} />
                  <Description
                    className={`${index % 2 === 0 ? "order-1 order-lg-0" : ""}`}
                    title={list.title}
                    description={list.description}
                  />
                </div>
              </div>
            </section>
          );
        })
      ) : (
        <h2 className="text-center">No List in this section</h2>
      )}
    </>
  );
};

export default index;
