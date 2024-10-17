"use client";
import Link from "next/link";
import { FaStarHalfStroke } from "react-icons/fa6";
import { getImgUrl } from "../utils/getImgUrl";
import Image from "next/image";
import { cropTextToWords } from "../utils/cropTextWord";
import { useCart } from "../context/cartContext";

interface CartProps {
  data: {
    _id: string;
    image: string;
    name: string;
    price: number;
    description: string;
    category: { name: string };
  };
  className?: string;
  type?: "horizontal" | "vertical";
}

export default function Cart({
  data,
  className,
  type = "vertical",
}: CartProps) {
  const { addToCart, cartItems } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart({
      _id: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
  };

  return (
    <div
      className={`${
        type === "horizontal"
          ? "flex items-center gap-4"
          : type === "vertical"
          ? "text-center"
          : ""
      } ${className}`}
    >
      <div className="relative overflow-hidden group">
        <img className="w-full" src={getImgUrl(data.image)} alt={data.name} />
        <div className="absolute w-full h-full bg-black bg-opacity-10 bottom-[-100%] group-hover:bottom-0 duration-500 flex items-center justify-center">
          <button
            onClick={() => handleAddToCart(data)}
            className="text-base bg-sky-600 rounded-sm px-6 py-2 text-white uppercase"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div>
        <Link href={`/${data.category.name}/${data._id}`}>
          <h3
            className={`${
              type === "horizontal"
                ? "text-sm font-medium my-1"
                : "text-2xl my-2"
            } text-primary  capitalize`}
          >
            {data?.name}
          </h3>
        </Link>

        <p
          className={`${
            type === "horizontal" ? "my-1 text-xs" : "text-sm my-2"
          }  text-primary  capitalize`}
        >
          {cropTextToWords(data.description, type === "horizontal" ? 5 : 10)}
        </p>

        <div className="flex gap-2 text-orange-500 justify-center">
          <FaStarHalfStroke />
          <FaStarHalfStroke />
          <FaStarHalfStroke />
          <FaStarHalfStroke />
          <FaStarHalfStroke />
        </div>
        <h3 className="text-base text-primary mt-2">৳ {data?.price}.00</h3>
      </div>
    </div>
  );
}
