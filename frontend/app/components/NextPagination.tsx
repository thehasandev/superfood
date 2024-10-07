"use client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Cart from "./Cart";
import { getData } from "../utils/fetch";

function Items({ currentItems }: any) {
  return (
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
  );
}

function NextPagination({ itemsPerPage }: any) {
  const [products, setProducts] = useState<any[]>([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData("/product/allproduct");
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  if (loading) return <div>Loading...</div>; // Optionally show a loading indicator

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex  flex-wrap justify-between items-end">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="flex gap-x-2 items-center text-base md:gap-x-5 mt-14 cursor-pointer w-auto"
          pageClassName="bg-primary px-2 md:px-4 text-white py-2"
        />
        <div>
          <p className="font-dm font-normal text-base text-gray">
            Products from {itemOffset + 1} to {endOffset} of {products.length}
          </p>
        </div>
      </div>
    </>
  );
}

export default NextPagination;
