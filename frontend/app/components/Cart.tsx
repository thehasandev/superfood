"use client";
import Link from "next/link";
import { FaStarHalfStroke } from "react-icons/fa6";
import { getImgUrl } from "../utils/getImgUrl";
import Image from "next/image";

interface CartProps {
  data: {
    _id: string;
    image: string;
    name: string;
    price: number;
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
  
  const handleAddToCart = (item) => {
    console.log({
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
        <Image
          height={600}
          width={900}
          src={getImgUrl(data.image)}
          alt={data.name}
        />
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
          <h3 className="text-2xl text-primary my-2 capitalize">
            {data?.name}
          </h3>
        </Link>

        <p className="text-sm text-primary my-2 capitalize">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ullam!
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
