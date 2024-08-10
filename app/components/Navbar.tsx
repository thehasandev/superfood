"use client";

import Image from "next/image";
import Container from "./Container";
import Logo from "../../public/images/logo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  const { ref, inView } = useInView({
    rootMargin: '0px 0px -100px 0px', // Trigger when the navbar is just out of view
    threshold: 0 // Trigger as soon as any part of the navbar is out of view
  });

  useEffect(() => {
    // Update the fixed state based on inView
    setIsFixed(!inView);
  }, [inView]);

  console.log(isFixed);
  

  return (
    <nav ref={ref} className={`w-full z-10 transition-all duration-300 `}>
      <Container>
        <nav className="flex justify-between py-4 items-center">
          {/*======== Logo =======*/}
          <div className="w-2/12">
            <Image src={Logo} alt="logo" />
          </div>

          {/*======== Nav List =========== */}
          <div className="w-8/12 flex justify-end gap-5">
            <ul className="flex gap-4 text-black"> {/* Adjust color based on the background */}
              <li>Home</li>
              <li>Pages</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Elements</li>
              <li>Shop</li>
            </ul>

            {/*======== Icons ========== */}
            <div className="flex gap-5 items-center text-black"> {/* Adjust color based on the background */}
              <span>|</span>
              <FaShoppingCart />
              <FaSearch />
              <IoMenu size={22} />
            </div>
          </div>
        </nav>
      </Container>
    </nav>
  );
}
