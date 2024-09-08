import Container from "./Container";
import { IoMdHome } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="bg-[#363636] py-20">
        <Container>
          <div className="grid grid-cols-7 gap-5">
            <div className="text-white col-span-2">
              <img src="./images/logo-white.png" alt="dark white" />
              <p className="text-base my-2">
                At vero eos et accusam et justo duo dolo res et ea rebum. Stet
                clita kasd guber gren. Aenean sollici tudin lorem quis biben dum
                auci elit clita.
              </p>
              <p className="flex items-center gap-2 text-xs">
                <IoMdHome />
                +387643932728
              </p>
              <p className="flex items-center gap-2 text-xs">
                <IoLocationSharp />
                Eighth Avenue 487, New York
              </p>
            </div>
            <div className="col-span-2">
              <form>
                <input
                  type="text"
                  placeholder="name"
                  className="w-full px-4 py-2 rounded-[2px]"
                />
                <input
                  type="text"
                  placeholder="email"
                  className="w-full my-4 px-4 py-2 rounded-[2px]"
                />
                <textarea
                  placeholder="contact"
                  className="w-full px-4 py-2 rounded-[2px]"
                />
              </form>
            </div>
            <div className="text-white col-span-2">
              <h2 className="text-3xl font-semibold">Twitter feed</h2>
              <p className="my-4">Couldn't connect with Twitter</p>
              <div className="flex gap-5">
                <FaFacebookSquare />
                <MdOutlineWhatsapp />
                <FaFacebookMessenger />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <p className="bg-[#2B2B2B] text-center py-4 text-white/50 text-xs">
        @2017 Qode Interactive, All Rights Reserved
      </p>
    </>
  );
}
