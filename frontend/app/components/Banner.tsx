import { FaShoppingCart } from "react-icons/fa";
import { GiSurroundedEye } from "react-icons/gi";
import Container from "./Container";


export default function Banner() {
  return (
    <section>
      <>
        {/*============= Banner ========= */}
        <div className="relative bg-banner  w-full bg-no-repeat md:bg-center bg-cover">
          <div className=" bg-black/20 w-full">
            <Container>
              <div className="flex items-center  md:w-5/12 px-3 xl-px-0 py-[280px]">
                <div className="text-white">
                  <h1 className="text-5xl md:text-7xl font-black">
                    The Art of tree
                  </h1>
                  <p className={`md:text-lg font-medium my-5`}>
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
        <div className="hidden md:flex gap-4 flex-col fixed top-1/2 -translate-y-1/2 right-0 text-white">
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
