"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { AiOutlineCloseSquare } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

const list = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Shop", link: "/shop" },
  {
    name: "Categories",
    link: "",
    moreList: [
      {
        name: "Noodles",
        link: "/Noodles",
      },
      {
        name: "Tea",
        link: "/Tea",
      },
      {
        name: "Burger",
        link: "/Burger",
      },
      {
        name: "Pizza",
        link: "/Pizza",
      },
    ],
  },
  { name: "Contact", link: "/contact" },
];

export default function Navbar({ data }: any) {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Change '50' to the scroll position you want to trigger the sticky behavior
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div
      className={`w-full z-10 transition-all duration-300 fixed top-0 px-3 xl-px-0 ${
        isSticky ? "bg-white shadow-lg" : pathname === "/" ? "" : "bg-[#241E25]"
      } `}
    >
      <Container>
        <nav className="flex justify-between py-4 items-center">
          {/*======== Logo =======*/}
          <div className="md:w-2/12 w-4/12">
            {isSticky ? (
              <Link href={"/"}>
                <Image
                  height={120}
                  width={200}
                  src="/images/logo-dark.png"
                  alt="dark logo"
                />
              </Link>
            ) : (
              <Link href={"/"}>
                <Image
                  height={120}
                  width={200}
                  src="/images/logo-white.png"
                  alt="dark white"
                />
              </Link>
            )}
          </div>

          {/*======== Nav List =========== */}
          <div className="md:w-8/12 flex justify-end gap-5 w-6/12">
            {/* Desktop navbar  */}
            <ul
              className={`md:flex gap-4 hidden ${
                isSticky ? "text-black" : "text-white"
              }`}
            >
              {list.map((item: any, index: number) => (
                <li
                  key={index}
                  className={`relative group after:absolute after:content-[''] after:bottom-[-2px] after:rounded-sm after:left-0 after:h-1 after:w-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                    isSticky
                      ? "after:bg-[#111111] hover:text-[#111111]"
                      : "after:bg-white"
                  }`}
                >
                  <Link href={item.link}>{item.name}</Link>

                  <ul
                    className={`w-32 -left-4  absolute top-5  scale-y-0 origin-top duration-500  z-[99999]  bg-white text-black/80 font-semibold text-base capitalize flex flex-col justify-end items-center gap-4 py-4 ${
                      item.moreList && "group-hover:scale-y-100"
                    }`}
                  >
                    {item.moreList &&
                      item.moreList.map((subList: any, inx: number) => (
                        <Link key={inx} href={subList.link}>
                          <li
                            className={`relative group after:absolute after:content-[''] after:bottom-[-2px] after:rounded-sm after:left-0 after:h-1 after:w-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer after:bg-black`}
                          >
                            {subList.name}
                          </li>
                        </Link>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>

            {/* mobile Navbar  */}

            <ul
              className={`py-5 md:hidden absolute top-[57px] bg-white flex flex-col justify-center items-center gap-5 w-full left-1/2 -translate-x-1/2 transition-transform duration-500 ${
                open ? "scale-y-100 duration-700" : "scale-y-0"
              } origin-top`}
            >
              {list.map((item: any, index: number) => (
                <li
                  key={index}
                  className={`relative after:absolute after:content-[''] after:bottom-[-2px] after:rounded-sm after:left-0 after:h-1 after:w-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                    isSticky
                      ? "after:bg-[#111111] hover:text-[#111111]"
                      : "after:bg-white"
                  }`}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>

            {/*======== Icons ========== */}
            <div
              className={`flex gap-5 items-center ${
                isSticky ? "text-black" : "text-white"
              }`}
            >
              <span className="hidden md:block">|</span>
              <FaShoppingCart
                className="cursor-pointer"
                onClick={() => setIsOpenSidebar(true)}
              />
              <FaSearch />
              <IoMenu
                size={22}
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
              />
            </div>
          </div>
        </nav>
      </Container>

      <div
        className={`lg:w-2/6 h-screen bg-[#e3e3e3]  absolute top-0 z-50 right-0 duration-300 ${
          isOpenSidebar ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <div className="flex justify-end pr-4 pt-4">
          <GrFormClose
            onClick={() => setIsOpenSidebar(false)}
            className="cursor-pointer"
            size={40}
          />
        </div>
        <h2>SHOPPING CART</h2>
        <div>
          <ul className="flex justify-between mt-5 px-2 ">
            <li className="font-dm font-normal  lg:font-bold text-sm lg:text-base text-primary">
              Action
            </li>
            <li className="font-dm  font-normal lg:font-bold text-sm lg:text-base text-primary">
              Product
            </li>
            <li className="font-dm  font-normal lg:font-bold text-sm lg:text-base text-primary">
              Name
            </li>
            <li className="font-dm  font-normal lg:font-bold text-sm lg:text-base text-primary">
              Price
            </li>
            <li className="font-dm  font-normal lg:font-bold text-sm lg:text-base text-primary">
              Quantity
            </li>
            <li className="font-dm  font-normal lg:font-bold text-sm lg:text-base text-primary">
              Subtotal
            </li>
          </ul>

          <>
            <ul className="flex justify-between items-center  mt-5 bg-[#454449] py-2">
              <li className="lg:w-32 w-16 pl-5 cursor-pointer">
                <AiOutlineCloseSquare className="text-white lg:text-xl text-sm" />
              </li>

              <li className="lg:w-16 w-8 mr-1 ">
                <Image
                  height={100}
                  width={100}
                  src="/images/p1.png"
                  alt="dark logo"
                />
              </li>

              <li className="lg:w-[180px] px-4  font-dm font-medium text-xs text-center text-white">
                Hasan
              </li>

              <li className="lg:w-[100px]  font-dm font-medium text-base  text-white">
                500
              </li>

              <li className="font-dm  font-bold text-base mx-4 lg:mx-0 text-white border border-white flex justify-center gap-x-3 px-1 items-center ">
                <button className="text-xl  text-white">-</button>
                100
                <button className="text-xl text-white">+</button>
              </li>

              <li className="lg:w-32  text-right pr-5 font-dm font-medium text-base text-white">
                100
              </li>
            </ul>
            <p className="font-dm font-medium text-xl pr-5 mt-12 text-right text-primary">
              Tottal : 50000
            </p>

            <div className="flex justify-center mt-5 lg:gap-x-5 gap-x-2">
              <div className="lg:w-6/12">
                <Link href={"/checkout"}>
                  <button
                    onClick={() => setIsOpenSidebar(false)}
                    className="lg:px-14 px-4 py-2 lg:w-full rounded-[5px] duration-500  text-sm font-bold font-dm  border border-primary hover:bg-white hover:text-primary text-white bg-primary"
                  >
                    CHECK OUT NOW
                  </button>
                </Link>
              </div>

              <div className="lg:w-5/12">
                <Link href={"/cart"}>
                  <button
                    onClick={() => setIsOpenSidebar(false)}
                    className="lg:px-14 px-4 py-2 lg:w-full rounded-[5px] duration-500  text-sm font-bold font-dm  border border-primary hover:bg-white hover:text-primary text-white bg-primary"
                  >
                    VIEW CART
                  </button>
                </Link>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
