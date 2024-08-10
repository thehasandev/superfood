"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./Container";
import LogoDark from "../../public/images/logo-dark.png";
import LogoLight from "../../public/images/logo-white.png";
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
              <Image src={LogoDark} alt="logo" />
            ) : (
              <Image src={LogoLight} alt="logo" />
            )}
          </div>

          {/*======== Nav List =========== */}
          <div className="w-8/12 flex justify-end gap-5">
            <ul
              className={`flex gap-4 ${isSticky ? "text-black" : "text-white"}`}
            >
              <li>Home</li>
              <li>Pages</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Elements</li>
              <li>Shop</li>
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
