"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Cart from "./Cart";

// Example items, to simulate fetching from another resources.
const items = [
  {
    url: "/images/p1.png",
    title: "Flowering tea",
    price: 120,
  },
  {
    url: "/images/p3.png",
    title: "Mock ups",
    price: 300,
  },
  {
    url: "/images/p5.png",
    title: "Herbal tea",
    price: 150,
  },
  {
    url: "/images/p1.png",
    title: "Flowering tea",
    price: 120,
  },
  {
    url: "/images/p3.png",
    title: "Mock ups",
    price: 300,
  },
  {
    url: "/images/p5.png",
    title: "Herbal tea",
    price: 150,
  },

  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },

  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p2.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p2.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p2.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p2.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p2.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p2.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p2.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p2.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p2.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p2.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p2.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p2.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p2.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p3.png",
    title: "Blueberry tea",
    price: 150,
  },
  {
    url: "/images/p5.png",
    title: "Blueberry tea",
    price: 150,
  },
];

function Items({ currentItems }: any) {
  return (
    <>
      <div className="grid grid-cols-6 gap-5 mt-5 justify-center">
        {currentItems &&
          currentItems.map((item: any, index: number) => (
            <Cart
              key={index}
              data={item}
              className="col-span-6 sm:col-span-3 md:col-span-2"
            />
          ))}
      </div>
    </>
  );
}

function NextPagination({ itemsPerPage }: any) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex items-end justify-between flex-wrap gap-y-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          className="flex gap-x-2 md:gap-x-5 mt-14 cursor-pointer w-auto"
          pageClassName="bg-primary px-2 md:px-4 text-white py-2"
        />
        <div>
          <p className="font-dm font-normal text-base text-gray">
            Products from {itemOffset + 1} to {endOffset} of {items.length}
          </p>
        </div>
      </div>
    </>
  );
}

export default NextPagination;
