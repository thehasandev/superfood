import Image from "next/image";
import Container from "./Container";
import Logo from "../../public/images/logo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    <Container>
      <nav className="flex justify-between py-4 items-center">
        {/*======== Logo =======*/}
        <div className="w-2/12">
          <Image src={Logo} alt="logo" />
        </div>

        {/*======== Nav List =========== */}
        <div className="w-8/12 flex justify-end gap-5">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Pages</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Elements</li>
            <li>Shop</li>
          </ul>

          {/*======== Icons ========== */}
          <div className="flex gap-5 items-center">
            <span>|</span>
            <FaShoppingCart />
            <FaSearch />
            <IoMenu size={22} />
          </div>
        </div>
      </nav>
    </Container>
  );
}
