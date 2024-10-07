import Link from "next/link";
import { FaStarHalfStroke } from "react-icons/fa6";
import { getImgUrl } from "../utils/getImgUrl";

interface CartProps {
  data: {
    image: string;
    name: string;
    price: number;
  };
  className?: string;
  type?: "horizontal" | "vertical";
}

export default function Cart({
  data,
  className,
  type = "vertical",
}: CartProps) {
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
        <img
          className="h-[200px] w-full object-cover aspect-video"
          src={getImgUrl(data.image)}
          alt="p1"
        />
        <div className="absolute w-full h-full bg-black bg-opacity-10 bottom-[-100%] group-hover:bottom-0 duration-500 flex items-center justify-center">
          <button className="text-base bg-sky-600 rounded-sm px-6 py-2 text-white uppercase">
            Add To Card
          </button>
        </div>
      </div>

      <div>
        {/* Need to change api  */}

        <h3 className="text-2xl text-primary my-2 capitalize">{data?.name}</h3>

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
