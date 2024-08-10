import { FaShoppingCart } from "react-icons/fa";
import { GiSurroundedEye } from "react-icons/gi";
import Container from "./Container";
import { openSans } from "../layout";

export default function Banner() {
  return (
    <section>
      <>
        {/*============= Banner ========= */}
        <div className="relative bg-banner h-screen w-full bg-no-repeat bg-center bg-cover">
          <div className="absolute top-0 bg-black/20 w-full h-full">
            <Container>
              <div className="flex items-center h-screen w-5/12">
                <div className="text-white">
                  <h1 className="text-7xl font-black">The Art of tree</h1>
                  <p className={`text-lg font-medium my-5 ${openSans.className}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum facilis eum non, mollitia tempore laudantium?
                  </p>
                  <button className="bg-teal-500 px-6 py-2 text-white text-base uppercase font-medium">
                    View features
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </div>

        {/* Sticky Icons  */}
        <div className="flex gap-4 flex-col fixed top-1/2 -translate-y-1/2 right-0 text-white">
          <div className="w-10 h-10 bg-pink-700 flex justify-center items-center">
            <GiSurroundedEye size={20} />
          </div>
          <div className="w-10 h-10 bg-pink-700 flex justify-center items-center">
            <FaShoppingCart />
          </div>
        </div>
      </>
    </section>
  );
}
