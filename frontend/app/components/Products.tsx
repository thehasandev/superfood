"use client";
import Cart from "../components/Cart";
export default function Products({ data }: any) {
  return (
    <div className="grid grid-cols-6 gap-5 my-2">
      {data.map((item: any, index: number) => (
        <Cart
          className="col-span-6 min-[500px]:col-span-3 xl:col-span-2"
          data={item}
          key={index}
        />
      ))}
    </div>
  );
}
