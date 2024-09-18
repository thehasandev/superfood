import Container from "../../../components/Container";
import { FaStarHalfStroke } from "react-icons/fa6";
import Data from "../../../data/product";
import Cart from "@/app/components/Cart";
export default function Details() {
  return (
    <div className="py-20">
      <Container>
        <h1 className="text-2xl font-bold uppercase text-[#444444] my-6">
          Shop
        </h1>
        <div className="grid grid-cols-5 justify-between gap-5">
        <div className="col-span-3">
            <h2 className="text-3xl font-bold text-[#444444]">Flowering tea</h2>
            <h2 className="text-3xl font-bold text-[#444444] my-2">$190.00</h2>
            <div className="flex gap-2 text-orange-500  mb-8">
              <FaStarHalfStroke />
              <FaStarHalfStroke />
              <FaStarHalfStroke />
              <FaStarHalfStroke />
              <FaStarHalfStroke />
            </div>
            <p className="text-base font-bold text-black/50 mb-4">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire. Bzed by the charms
              of pleasure of the moment.
            </p>
            <div className="flex gap-4 items-center">
              <button className="text-2xl">-</button>
              <p>10</p>
              <button className="text-2xl">+</button>
            </div>
            <button className="bg-teal-500 px-6 py-2 text-white text-base uppercase font-medium">
              Add To Cart
            </button>
          </div>
          <div className="col-span-2">
            <div className="mb-5">
              <img className="w-full" src="/images/p1.png" alt="p1" />
            </div>
            <div className="grid grid-cols-3 gap-5">
              <img src="/images/p1.png" alt="p1" />
              <img src="/images/p1.png" alt="p1" />
              <img src="/images/p1.png" alt="p1" />
            </div>
          </div>
  
        </div>

        <h3 className="text-3xl text-black/80 my-10">Related Product</h3>
       <div className="grid grid-cols-4 gap-5">

        {Data?.map(
          (item, index) =>
            index > 2 && <Cart data={item} key={index} className="mb-5" />
        )}
       </div>
      </Container>
    </div>
  );
}
