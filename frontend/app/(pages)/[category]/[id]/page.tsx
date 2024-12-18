import Container from "../../../components/Container";
import { FaStarHalfStroke } from "react-icons/fa6";
import Cart from "@/app/components/Cart";

import { getImgUrl } from "@/app/utils/getImgUrl";
import Image from "next/image";
import { getData } from "@/app/utils/fetch";

type Params = {
  id: string;
  category: string;
};

export default async function Details({ params }: { params: Params }) {
  const data = await getData(`/product/single-product?id=${params.id}`);

  const relatedProduct = (
    await getData(`/product/category?name=${params.category}`)
  ).products.filter((item: any) => item._id !== params.id);

  return (
    <div className="py-20 px-3 xl:px-0">
      <Container>
        <h1 className="text-2xl font-bold uppercase text-[#444444] my-6">
          Shop
        </h1>
        <div className="grid grid-cols-5 justify-between gap-5">
          <div className="col-span-5 sm:col-span-3 md:col-span-2">
            <div className="mb-5">
              <img
                className="w-full"
                src={getImgUrl(data.image)}
                alt={data.name}
              />
            </div>
          </div>
          <div className="col-span-5 sm:col-span-2 md:col-span-3">
            <h2 className="text-3xl font-bold text-[#444444]">{data?.name}</h2>
            <h2 className="text-3xl font-bold text-[#444444] my-2">
              ৳ {data?.price}.00
            </h2>
            <div className="flex gap-2 text-orange-500  mb-8">
              <FaStarHalfStroke />
              <FaStarHalfStroke />
              <FaStarHalfStroke />
              <FaStarHalfStroke />
              <FaStarHalfStroke />
            </div>
            <p className="text-base font-bold text-black/50 mb-4">
              {data?.description}
            </p>
            <div className="flex gap-4 items-center">
              <button className="text-2xl">-</button>
              <p>0</p>
              <button className="text-2xl">+</button>
            </div>
            <button className="bg-teal-500 px-6 py-2 text-white text-base uppercase font-medium">
              Add To Cart
            </button>
          </div>
        </div>

        <h3 className="text-3xl text-black/80 my-10">Related Product</h3>
        <div className="grid grid-cols-12 gap-5">
          {relatedProduct?.map((item: any, index: number) => (
            <Cart
              data={item}
              key={index}
              className="mb-5 col-span-12 min-[460px]:col-span-6 md:col-span-3"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
