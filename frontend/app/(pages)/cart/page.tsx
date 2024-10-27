"use client";
import Container from "@/app/components/Container";
import { useCart } from "../../context/cartContext";

import Link from "next/link";
import { AiOutlineCloseSquare, AiOutlineRight } from "react-icons/ai";
import { getImgUrl } from "@/app/utils/getImgUrl";
import { useTotalAmount } from "@/app/context/totalAmountContext";

export default function Cart() {
  const { cartItems, incrementItem, decrementItem, deleteItem } = useCart();
  const { totalAmount } = useTotalAmount();

  return (
    <section className="my-24 px-3 xl:px-0">
      <Container>
        <h1 className="text-xl font-bold uppercase text-[#444444]">Cart</h1>

        <ul className="bg-ash flex justify-between md:p-4 ">
          <li className="font-dm font-bold text-base text-primary">Action</li>
          <li className="font-dm font-bold text-base text-primary">Product</li>
          <li className="font-dm font-bold text-base text-primary">Name</li>
          <li className="font-dm font-bold text-base md:pl-10 text-primary">
            Price
          </li>
          <li className="font-dm font-bold text-base text-primary">Quantity</li>
          <li className="font-dm font-bold  text-base text-primary">
            Sub Total
          </li>
        </ul>

        <ul>
          {cartItems.map((item) => (
            <div
              className="bg-ash flex items-center gap-2 md:p-4 border-b border-gray py-5"
              key={item._id}
            >
              <li className="md:w-[200px] font-dm font-bold text-base text-primary cursor-pointer">
                <AiOutlineCloseSquare
                  onClick={() => deleteItem(item._id)}
                  size={30}
                  className="text-primary"
                />
              </li>
              <li className="md:w-[300px] font-dm font-bold text-base text-primary">
                <img
                  className="w-full"
                  src={getImgUrl(item.image)}
                  alt="dark logo"
                />
              </li>
              <li className="md:w-[400px] text-center  font-dm font-bold text-xs md:text-base text-primary">
                {item.name}
              </li>
              <li className="md:w-[140px] font-dm font-bold text-base text-primary">
                {item.price}
              </li>
              <li className="flex items-center px-1 justify-center gap-5 font-dm border border-primary border-solid md:ml-24 font-bold text-base text-primary">
                <button
                  onClick={() => decrementItem(item._id)}
                  className="text-lg text-primary"
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => incrementItem(item._id)}
                  className="text-lg  text-primary"
                >
                  +
                </button>
              </li>
              <li className="md:w-[300px] text-right   font-dm font-bold  text-base text-primary">
                {item.price * item.quantity}
              </li>
            </div>
          ))}
        </ul>

        {/* <select className="w-32 border mt-8 border-gray/50">
          <option className="font-dm font-bold text-base text-primary">
            Size
          </option>
          <option className="font-dm font-bold text-base text-primary">
            29
          </option>
          <option className="font-dm font-bold text-base text-primary">
            30
          </option>
          <option className="font-dm font-bold text-base text-primary">
            31
          </option>
        </select> */}

        <section>
          <h2 className="text-right mt-5">Cart totals</h2>

          <div className="flex justify-end mt-10">
            <table>
              <thead>
                <tr>
                  <th className="border border-gray/50  font-dm font-bold text-base text-primary py-4 px-5 xl:px-32">
                    Subtotal
                  </th>
                  <th className="border border-gray/50 font-dm font-normal text-base text-gray py-4 px-5 xl:px-32">
                    {totalAmount}
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-gray/50 font-dm font-bold text-base text-primary py-4 px-5 xl:px-32">
                    Total
                  </td>
                  <td className="border border-gray/50 font-dm font-bold text-base text-primary py-4 px-5 xl:px-32">
                    {totalAmount}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-5">
            <Link href={"/checkout"}>
              <button className="bg-black/70 px-8 py-2 rounded-sm text-white">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </section>
      </Container>
    </section>
  );
}
