"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

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

  return (
    <div
      className={`w-full z-10 transition-all duration-300 fixed top-0 ${
        isSticky ? "bg-white shadow-lg" : ""
      }`}
    >
      <Container>
        <nav className="flex justify-between py-4 items-center">
          {/*======== Logo =======*/}
          <div className="w-2/12">
            {isSticky ? (
              <img src="./images/logo-dark.png" alt="dark logo" />
            ) : (
              <img src="./images/logo-white.png" alt="dark white" />
            )}
          </div>

          {/*======== Nav List =========== */}
          <div className="w-8/12 flex justify-end gap-5">
            <ul
              className={`flex gap-4 ${isSticky ? "text-black" : "text-white"}`}
            >
              <li
                className={`relative after:absolute after:content-[''] after:bottom-[-2px] after:rounded-sm after:left-0 after:h-1 after:w-0 hover:after:w-full after:duration-300 cursor-pointer ${
                  isSticky
                    ? "after:bg-[#111111] hover:text-[#111111]"
                    : "after:bg-white"
                }`}
              >
                Home
              </li>
              <li
                className={`relative after:absolute after:content-[''] after:bottom-[-2px] after:rounded-sm after:left-0 after:h-1 after:w-0 hover:after:w-full after:duration-300 cursor-pointer ${
                  isSticky
                    ? "after:bg-[#111111] hover:text-[#111111]"
                    : "after:bg-white"
                }`}
              >
                Pages
              </li>
              <li
                className={`relative after:absolute after:content-[''] after:bottom-[-2px] after:rounded-sm after:left-0 after:h-1 after:w-0 hover:after:w-full after:duration-300 cursor-pointer ${
                  isSticky
                    ? "after:bg-[#111111] hover:text-[#111111]"
                    : "after:bg-white"
                }`}
              >
                Portfolio
              </li>
              <li
                className={`relative after:absolute after:content-[''] after:bottom-[-2px] after:rounded-sm after:left-0 after:h-1 after:w-0 hover:after:w-full after:duration-300 cursor-pointer ${
                  isSticky
                    ? "after:bg-[#111111] hover:text-[#111111]"
                    : "after:bg-white"
                }`}
              >
                Blog
              </li>
              <li
                className={`relative after:absolute after:content-[''] after:bottom-[-2px] after:rounded-sm after:left-0 after:h-1 after:w-0 hover:after:w-full after:duration-300 cursor-pointer ${
                  isSticky
                    ? "after:bg-[#111111] hover:text-[#111111]"
                    : "after:bg-white"
                }`}
              >
                Elements
              </li>
              <li
                className={`relative after:absolute after:content-[''] after:bottom-[-2px] after:rounded-sm after:left-0 after:h-1 after:w-0 hover:after:w-full after:duration-300 cursor-pointer ${
                  isSticky
                    ? "after:bg-[#111111] hover:text-[#111111]"
                    : "after:bg-white"
                }`}
              >
                Shop
              </li>
            </ul>

            {/*======== Icons ========== */}
            <div
              className={`flex gap-5 items-center ${
                isSticky ? "text-black" : "text-white"
              }`}
            >
              <span>|</span>
              <FaShoppingCart />
              <FaSearch />
              <IoMenu size={22} />
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}
