import Cart from "./Cart";
import Container from "./Container";
import Data from "../data/product";
export default function Product() {
  return (
    <div className="py-20 px-3 xl:px-0">
      <Container>
        <h2 className="text-4xl text-primary font-bold text-center">
          Easy to Customize
        </h2>
        <h2 className="md:text-xl mt-4 mb-6 text-primary text-center md:w-7/12 mx-auto">
          The Visual Composer drag-and-drop page builder is packed with all
          Elated Themes. Setting up your website and creating pages full of
          stunning content.
        </h2>

        <div className="grid grid-cols-4 gap-5 items-center justify-center">
          {Data?.map((item, index) => (
            <Cart
              data={item}
              key={index}
              className="col-span-4 min-[460px]:col-span-2  sm:col-span-2 md:col-span-1"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
