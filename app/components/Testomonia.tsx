import Container from "./Container";
import { GiSelfLove } from "react-icons/gi";
import { FaGift } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

function Testomonia() {
  return (
    <>
      <section className="bg-sidebar bg-cover bg-left bg-no-repeat pt-20 pb-40">
        <Container>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#444444]">
              Beautiful Blog Layouts
            </h2>
            <p className="text-xl my-4 w-8/12 mx-auto text-black/50">
              The Elated Slider comes with video and image support, as well as
              full screen and parallax functionality. Display your essential
              content in style. Add sections with the stunning parallax effect
              to your pages. Make browsing your website an exciting and
              intuitive experience.
            </p>
            <button className="text-base bg-[#00BDBB] rounded-sm px-8 py-2.5 text-white uppercase">
              View features
            </button>
          </div>
        </Container>
      </section>
      <section className="mb-20">
        <Container>
          <div className="grid grid-cols-3">
            <div className="pt-32">
              <div className="flex gap-2">
                <GiSelfLove className="text-[#00BDBB] text-[35px]" />
                <div>
                  <h2 className="text-[#3A3A3A] text-2xl  font-semibold">
                    Powerful Elated Settings
                  </h2>
                  <p className="text-base text-gray-400 mt-2">
                    Take control over your website. All elements can be easily
                    styled and modified in Elated settings easily and
                    intuitively.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 my-5">
                <FaGift className="text-[#00BDBB] text-[35px]" />
                <div>
                  <h2 className="text-[#3A3A3A] text-2xl  font-semibold">
                    Drag-and-Drop Builder
                  </h2>
                  <p className="text-base text-gray-400 mt-2">
                    Add sections with the stunning parallax effect to your
                    pages. Make browsing your website an exciting experience.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <CiStar className="text-[#00BDBB] text-[35px]" />
                <div>
                  <h2 className="text-[#3A3A3A] text-2xl  font-semibold">
                    Welcome to Elated
                  </h2>
                  <p className="text-base text-gray-400 mt-2">
                    The Visual Composer drag-and-drop page builder is packed
                    with all Elated Themes to set up your stunning website.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative col-span-2 ">
              <div className="absolute -top-24 right-0">
                <img src="./images/mag.png" alt="mag" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Testomonia;
