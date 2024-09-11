"use client";

import { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useBradCrumb } from "../breadcumpContext/breadcumpContext";

const list = [
  { name: "Home", link: "/" },
  { name: "Pages", link: "/pages" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blog", link: "/blog" },
  { name: "Elements", link: "/elements" },
  { name: "Shop", link: "/shop" },
];

export default function Navbar() {
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

  const { setActive }: any = useBradCrumb();

  const handleBradcrumb = (item: any) => {
    setActive(item.name);
   
  };

  return (
    <div
      className={`w-full z-10 transition-all duration-300 fixed top-0 px-3 xl-px-0 ${
        isSticky ? "bg-white shadow-lg" : pathname === "/" ? "" : "bg-green-400"
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
              {list.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleBradcrumb(item)}
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
            {/* mobile Navbar  */}

            <ul
              className={`py-5 md:hidden absolute top-[57px] bg-white flex flex-col justify-center items-center gap-5 w-full left-1/2 -translate-x-1/2 transition-transform duration-500 ${
                open ? "scale-y-100 duration-700" : "scale-y-0"
              } origin-top`}
            >
              {list.map((item, index) => (
                <li
                  onClick={() => handleBradcrumb(item)}
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
              className={`flex gap-5 items-center  ${
                isSticky ? "text-black" : "text-white"
              }`}
            >
              <span className="hidden md:block">|</span>
              <FaShoppingCart />
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
    </div>
  );
}
