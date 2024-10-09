"use client";
import Cart from "../components/Cart";
export default function NextPagination({ data }: any) {
  return (
    <div className="grid grid-cols-3 gap-5 my-2">
      {data.map((item: any, index: number) => (
        <Cart data={item} key={index} />
      ))}
    </div>
  );
}
