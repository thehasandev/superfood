import Cart from "./Cart";
import Container from "./Container";
import Data from "../data/product";
export default function Product() {
  return (
    <div className="py-20">
      <Container>
        <h2 className="text-4xl text-primary font-bold text-center">
          Easy to Customize
        </h2>
        <h2 className="text-xl mt-4 mb-6 text-primary text-center w-7/12 mx-auto">
          The Visual Composer drag-and-drop page builder is packed with all
          Elated Themes. Setting up your website and creating pages full of
          stunning content.
        </h2>

        <div className="grid grid-cols-4 gap-5">
          {Data?.map((item, index) => (
            <Cart data={item} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
}
